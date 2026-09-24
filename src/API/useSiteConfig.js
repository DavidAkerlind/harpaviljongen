import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from './apiBase.js';

// Shown when no Meny/Vinlista PDF is active in the admin
export const FALLBACK_MENU_PDF = '/Ny_meny_kommer_snart.pdf';

const STORAGE_KEY = 'harpaviljongen-site-config';

// Same as the site looked before the admin controlled it: extra pages hidden, placeholder PDF
const DEFAULT_CONFIG = {
	pages: {
		chambre: { navbar: false, home: false },
		events: { navbar: false, home: false },
		gallery: { navbar: false, home: false },
	},
	menus: { food: null, wine: null },
};

function readCache() {
	try {
		const cached = JSON.parse(localStorage.getItem(STORAGE_KEY));
		return cached?.pages && cached?.menus ? cached : null;
	} catch {
		return null;
	}
}

// One request per page load, shared by the navbar and the homepage.
// Until it answers, the last known config (or the defaults) is shown, so nothing waits on the API.
let current = readCache() ?? DEFAULT_CONFIG;
let request = null;
const listeners = new Set();

function loadSiteConfig() {
	if (!request) {
		request = axios
			.get(`${API_URL}/site-config`, { timeout: 15000 })
			.then((res) => {
				current = res.data.data;
				try {
					localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
				} catch {
					// Storage blocked (private mode) – the site still works, just without the cache
				}
				listeners.forEach((listener) => listener(current));
			})
			.catch((err) => {
				console.error(
					'[useSiteConfig] Could not load site config:',
					err.message,
				);
			});
	}
	return request;
}

export function useSiteConfig() {
	const [config, setConfig] = useState(current);

	useEffect(() => {
		listeners.add(setConfig);
		loadSiteConfig();
		setConfig(current);
		return () => listeners.delete(setConfig);
	}, []);

	return config;
}

export const menuPdfLink = (config, type) =>
	config.menus?.[type]?.url ?? FALLBACK_MENU_PDF;

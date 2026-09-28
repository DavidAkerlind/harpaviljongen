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
// Whether the API has answered (or failed) on this page load
let ready = false;
const readyListeners = new Set();

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
			})
			.finally(() => {
				ready = true;
				readyListeners.forEach((listener) => listener(true));
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

// true once the API has answered or failed, so something waiting for it can stop waiting
export function useSiteConfigReady() {
	const [isReady, setReady] = useState(ready);

	useEffect(() => {
		readyListeners.add(setReady);
		loadSiteConfig();
		setReady(ready);
		return () => readyListeners.delete(setReady);
	}, []);

	return isReady;
}

export const menuPdfLink = (config, type) =>
	config.menus?.[type]?.url ?? FALLBACK_MENU_PDF;

// Before the admin could create menus (older API or an old cached config): Meny and Vinlista
const legacyMenuLists = (config) => [
	{ type: 'food', label: 'Meny', navbar: true, home: true, builtIn: true, url: config.menus?.food?.url },
	{ type: 'wine', label: 'Vinlista', navbar: true, home: true, builtIn: true, url: config.menus?.wine?.url },
];

// The menu buttons for one place on the site, placement 'navbar' or 'home', in the
// admin's order: [{ key, label, link }]. Meny and Vinlista open the placeholder PDF
// when none is active; menus created in the admin are left out until one is.
export function menuButtons(config, placement) {
	const lists = config.menuLists ?? legacyMenuLists(config);
	return lists
		.filter((menu) => menu[placement])
		.map((menu) => ({
			key: menu.type,
			label: menu.label,
			link: menu.url ?? (menu.builtIn ? FALLBACK_MENU_PDF : null),
		}))
		.filter((button) => button.link);
}

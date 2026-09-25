import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { API_URL } from '../../API/apiBase.js';

// Counts page views for the admin's Statistik page. Only the page's path and the page the
// visitor came from are sent: no cookies, nothing saved in the browser, no personal data.
// Only on the real site, not in local development or on preview deploys
// (set VITE_ANALYTICS=on in .env.local to test it locally).
const enabled =
	import.meta.env.VITE_ANALYTICS === 'on' ||
	(import.meta.env.PROD &&
		/(^|\.)harpaviljongen\.com$/.test(window.location.hostname));

function send(path, referrer) {
	const url = `${API_URL}/analytics/hit`;
	const body = JSON.stringify({ p: path, r: referrer });
	try {
		// A string is sent as text/plain, so the browser needs no CORS preflight
		if (navigator.sendBeacon?.(url, body)) return;
	} catch {
		// fall back to fetch below
	}
	fetch(url, {
		method: 'POST',
		body,
		keepalive: true,
		headers: { 'Content-Type': 'text/plain' },
	}).catch(() => {});
}

function PageViews() {
	const { pathname } = useLocation();
	const previous = useRef(null);

	useEffect(() => {
		// Same page again: StrictMode's second run, or only the #hash changed
		if (!enabled || previous.current === pathname) return;
		// The first page is a new visit (the referrer says from where); later ones came
		// from a page on the site
		const referrer = previous.current
			? window.location.origin + previous.current
			: document.referrer;
		previous.current = pathname;
		send(pathname, referrer);
	}, [pathname]);

	return null;
}

export default PageViews;

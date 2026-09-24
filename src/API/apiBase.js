// Set VITE_API_URL in .env.local to test against a local API, e.g. http://localhost:7000/api
export const API_URL =
	import.meta.env.VITE_API_URL ||
	'https://harpaviljongen-db-api.onrender.com/api';

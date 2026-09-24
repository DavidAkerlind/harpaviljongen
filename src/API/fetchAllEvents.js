import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from './apiBase.js';

export function fetchAllEvents() {
	const [fetchedEvents, setFetchedEvents] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		axios
			.get(`${API_URL}/events`)
			.then((res) => {
				setFetchedEvents(res.data.data ?? []);
			})
			.catch((err) => {
				if (err.response?.status === 404) {
					setFetchedEvents([]);
				} else {
					console.error(
						'[fetchAllEvents] CORS or network error – check that the backend allows https://harpaviljongen.com:',
						err.message,
					);
					setError(err);
				}
			})
			.finally(() => setLoading(false));
	}, []);
	return { fetchedEvents, loading, error };
}

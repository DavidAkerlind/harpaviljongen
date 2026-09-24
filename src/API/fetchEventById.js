import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from './apiBase.js';

export function fetchEventById(eventId) {
	const [fetchedEvent, setFetchedEvent] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		axios
			.get(`${API_URL}/events/${eventId}`)
			.then((res) => {
				setFetchedEvent(res.data.data);
			})
			.catch((err) => {
				console.error(
					'[fetchEventById] CORS or network error – check that the backend allows https://harpaviljongen.com:',
					err.message,
				);
				setError(err);
			})
			.finally(() => setLoading(false));
	}, []);
	return { fetchedEvent, loading, error };
}

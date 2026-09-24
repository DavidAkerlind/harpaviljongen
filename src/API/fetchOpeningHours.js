import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from './apiBase.js';

export function fetchOpeningHours() {
	const [fetchedHours, setFetchedHours] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		axios
			.get(`${API_URL}/openingHours`)
			.then((res) => {
				setFetchedHours(res.data.data);
			})
			.catch((err) => {
				console.error(
					'[fetchOpeningHours] CORS or network error – check that the backend allows https://harpaviljongen.com:',
					err.message,
				);
				setError(err);
			})
			.finally(() => setLoading(false));
	}, []);
	return { fetchedHours, loading, error };
}

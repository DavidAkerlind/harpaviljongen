import { useEffect, useState } from 'react';
import axios from 'axios';

export function fetchOpeningHours() {
	const [fetchedHours, setFetchedHours] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		axios
			.get(`https://harpaviljongen-db-api.onrender.com/api/openingHours`)
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

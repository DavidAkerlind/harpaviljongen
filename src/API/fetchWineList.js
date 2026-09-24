import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from './apiBase.js';

export function fetchWineList() {
	const [fetchedWineList, setFetchedWineList] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		axios
			.get(`${API_URL}/wine-list`)
			.then((res) => {
				setFetchedWineList(res.data.data);
			})
			.catch((err) => {
				console.error(
					'[fetchWineList] CORS or network error – check that the backend allows https://harpaviljongen.com:',
					err.message,
				);
				setError(err);
			})
			.finally(() => setLoading(false));
	}, []);
	return { fetchedWineList, loading, error };
}

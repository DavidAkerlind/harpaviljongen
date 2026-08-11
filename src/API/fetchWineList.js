import { useEffect, useState } from 'react';
import axios from 'axios';

export function fetchWineList() {
	const [fetchedWineList, setFetchedWineList] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		axios
			.get(`https://harpaviljongen-db-api.onrender.com/api/wine-list`)
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

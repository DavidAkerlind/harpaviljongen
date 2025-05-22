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
			.catch((error) => setError(error))
			.finally(() => setLoading(false));
	}, []);
	return { fetchedHours, loading, error };
}

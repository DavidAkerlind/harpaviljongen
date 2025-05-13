import { useEffect, useState } from 'react';
import axios from 'axios';

export function devfetchOpeningHours() {
	const [fetchedHours, setFetchedHours] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		axios
			.get(`http://localhost:7000/api/opening-hours`)
			.then((res) => {
				setFetchedHours(res.data.data);
			})
			.catch((error) => setError(error))
			.finally(() => setLoading(false));
	}, []);
	return { fetchedHours, loading, error };
}

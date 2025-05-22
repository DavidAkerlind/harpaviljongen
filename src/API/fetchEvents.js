import { useEffect, useState } from 'react';
import axios from 'axios';

export function fetchEvents() {
	const [setFetchEvents, fetchEvents] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		axios
			.get(`https://harpaviljongen-db-api.onrender.com/api/events`)
			.then((res) => {
				setFetchEvents(res.data.data);
			})
			.catch((error) => setError(error))
			.finally(() => setLoading(false));
	}, []);
	return { fetchEvents, loading, error };
}

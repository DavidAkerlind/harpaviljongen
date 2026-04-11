import { useEffect, useState } from 'react';
import axios from 'axios';

export function fetchAllEvents() {
	const [fetchedEvents, setFetchedEvents] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		axios
			.get(`https://harpaviljongen-db-api.onrender.com/api/events`)
			.then((res) => {
				setFetchedEvents(res.data.data ?? []);
			})
			.catch((err) => {
				if (err.response?.status === 404) {
					setFetchedEvents([]);
				} else {
					setError(err);
				}
			})
			.finally(() => setLoading(false));
	}, []);
	return { fetchedEvents, loading, error };
}

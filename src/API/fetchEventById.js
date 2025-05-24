import { useEffect, useState } from 'react';
import axios from 'axios';

export function fetchEventById(eventId) {
	const [fetchedEvent, setFetchedEvent] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		axios
			.get(
				`https://harpaviljongen-db-api.onrender.com/api/events/${eventId}`
			)
			.then((res) => {
				setFetchedEvent(res.data.data);
			})
			.catch((error) => setError(error))
			.finally(() => setLoading(false));
	}, []);
	return { fetchedEvent, loading, error };
}

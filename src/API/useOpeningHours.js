import { useEffect, useState } from 'react';
import axios from 'axios';

export function useOpeningHours(menuID) {
	const [fetchedHours, setFetchedHours] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (!menuID) return;
		axios
			.get(`http://localhost:7000/api/opening-hours`)
			.then((res) => {
				setFetchedHours(res.data);
			})
			.catch((error) => setError(error))
			.finally(() => setLoading(false));
	}, [menuID]);
	return { fetchedHours, loading, error };
}

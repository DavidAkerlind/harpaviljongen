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
			.catch((error) => setError(error))
			.finally(() => setLoading(false));
	}, []);
	return { fetchedWineList, loading, error };
}

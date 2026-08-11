import { useEffect, useState } from 'react';
import axios from 'axios';

export function fetchMenuById(menuID) {
	const [fetchedMenu, setFetchedMenu] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (!menuID) return;
		axios
			.get(
				`https://harpaviljongen-db-api.onrender.com/api/menus/${menuID}`,
			)
			.then((res) => {
				setFetchedMenu(res.data.data);
			})
			.catch((err) => {
				console.error(
					'[fetchMenuById] CORS or network error – check that the backend allows https://harpaviljongen.com:',
					err.message,
				);
				setError(err);
			})
			.finally(() => setLoading(false));
	}, [menuID]);

	return { fetchedMenu, loading, error };
}

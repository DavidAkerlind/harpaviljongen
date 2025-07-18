import { useEffect, useState } from 'react';
import axios from 'axios';

export function devfetchMenuById(menuID) {
	const [fetchedMenu, setFetchedMenu] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (!menuID) return;
		axios
			.get(`http://localhost:7000/api/menus/${menuID}`)
			.then((res) => {
				setFetchedMenu(res.data.data[0]);
			})
			.catch((error) => setError(error))
			.finally(() => setLoading(false));
	}, [menuID]);

	return { fetchedMenu, loading, error };
}

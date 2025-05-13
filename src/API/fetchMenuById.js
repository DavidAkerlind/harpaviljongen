import { useEffect, useState } from 'react';
import axios from 'axios';

export function fetchMenuById(menuID) {
	const [fetchedMenu, setFetchedMenu] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (!menuID) return;
		axios
			.get(`https://harpaviljongen-api.onrender.com/api/menus/${menuID}`)
			.then((res) => {
				setFetchedMenu(res.data.data[0]);
			})
			.catch((error) => setError(error))
			.finally(() => setLoading(false));
	}, [menuID]);

	return { fetchedMenu, loading, error };
}

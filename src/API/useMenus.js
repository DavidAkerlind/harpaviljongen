import { useEffect, useState } from 'react';
import axios from 'axios';

export function useMenus(menuID) {
	const [fetchedMenu, setFetchedMenu] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (!menuID) return;
		axios
			.get(`http://localhost:7000/api/menus/${menuID}`)
			.then((res) => {
				setFetchedMenu(res.data);
			})
			.catch((error) => setError(error))
			.finally(() => setLoading(false));
	}, [menuID]);
	console.log(fetchedMenu);
	return { fetchedMenu, loading, error };
}

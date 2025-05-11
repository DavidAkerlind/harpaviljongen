import { use, useEffect } from 'react';
import './navItem.css';
import { Link, useLocation } from 'react-router-dom';

function NavItem({ text, link, type }) {
	const location = useLocation();

	console.log(location);
	console.log(link);

	let isActive = false;

	isActive = location.pathname === link;

	return (
		<li className="nav__list-item">
			<Link
				className={isActive ? 'link--active' : 'link link--hover'}
				aria-label={`Go to ${text} page`}
				to={link}>
				{text}
			</Link>
		</li>
	);
}

export default NavItem;

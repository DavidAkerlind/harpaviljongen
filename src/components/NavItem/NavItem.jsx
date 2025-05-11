import './navItem.css';
import { Link, useLocation } from 'react-router-dom';

function NavItem({ text, link }) {
	const location = useLocation();

	console.log(location);
	console.log(link);

	let isActive = false;
	if (link.startsWith('#')) {
		link = '/' + link;
	}
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

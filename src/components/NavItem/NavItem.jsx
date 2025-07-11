import './navItem.css';
import { Link, useLocation } from 'react-router-dom';

function NavItem({ text, link }) {
	const location = useLocation();

	let isActive = false;
	if (link.startsWith('#')) {
		link = '/' + link;
	}
	isActive = location.pathname === link;

	return (
		<Link
			className={`link ${isActive ? 'link--active' : 'link link--hover'}`}
			aria-label={`Go to ${text} page`}
			to={link}>
			{text}
		</Link>
	);
}

export default NavItem;

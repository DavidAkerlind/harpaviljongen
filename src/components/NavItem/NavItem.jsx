import './navItem.css';
import { Link, useLocation } from 'react-router-dom';

function NavItem({ text, link, type }) {
	const location = useLocation();
	const isActive = location.pathname === link;

	return (
		<li className="nav__list-item">
			<Link
				className={
					isActive && type ? 'active-link' : 'link link--hover'
				}
				aria-label={`Go to ${text} page`}
				to={link}>
				{text}
			</Link>
		</li>
	);
}

export default NavItem;

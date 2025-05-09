import { Link } from 'react-router-dom';
import NavItem from '../NavItem/NavItem';

import './NavBar.css';

function NavBar() {
	const navItems = [
		{
			text: 'Hem',
			link: '/',
			header: true,
		},
		{
			text: 'Meny',
			link: '/menu',
		},
	];

	return (
		<nav className="nav">
			<ul className="nav__list">
				{navItems.map((item, index) => (
					<NavItem
						key={index}
						text={item.text}
						link={item.link}
						type={item.header}
					/>
				))}
			</ul>
			<h1 className="page-header">
				<Link className="link" aria-label={`Go to Home page`} to={'/'}>
					HARPAVILJONGEN
				</Link>
			</h1>
		</nav>
	);
}

export default NavBar;

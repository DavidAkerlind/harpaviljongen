import NavItem from '../NavItem/NavItem';

import './navBar.css';

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
		{
			text: 'Öppettider',
			link: '#openingHours',
		},
	];

	return (
		<nav className="nav">
			<ul className="nav__list">
				{navItems.map((item, index) => (
					<NavItem key={index} text={item.text} link={item.link} />
				))}
			</ul>
		</nav>
	);
}

export default NavBar;

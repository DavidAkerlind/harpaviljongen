import { useState, useEffect } from 'react';
import NavItem from '../NavItem/NavItem';
import hareImg from '../../assets/logo/hare-logo-green.svg';
import './navBar.css';
import { Link } from 'react-router-dom';
import { link, text } from 'framer-motion/client';

function NavBar({ type = 'normal' }) {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		if (type !== 'hero') return;

		const handleScroll = () => {
			setScrolled(window.scrollY > window.innerHeight * 0.85);
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, [type]);

	const navItems = [
		{ text: 'Hem', link: '/' },
		{ text: 'Meny', link: '/MENY_HARPAN_4_april.pdf' },
		{ text: 'Vinlista', link: '/VINLISTA_HARPAN_4_april.pdf' },
		{ text: 'Chambre', link: '/chambre' },
		{ text: 'Öppettider', link: '#openingHours' },
		{ text: 'Galleri', link: '/gallery' },
		{ text: 'Kontakt', link: '#contactInfo' },
	];

	return (
		<nav
			id="top"
			className={`nav${
				type === 'hero' ? ' nav--hero' : ''
			}${scrolled ? ' nav--scrolled' : ''}`}>
			{/* Overlay */}
			{open && (
				<div
					className="nav__overlay"
					onClick={() => setOpen(false)}></div>
			)}

			<button
				className={`nav__hamburger${
					open ? ' nav__hamburger--open' : ''
				}`}
				aria-label={open ? 'Stäng meny' : 'Öppna meny'}
				aria-expanded={open}
				onClick={() => setOpen((prev) => !prev)}>
				<span className="nav__hamburger-bar"></span>
				<span className="nav__hamburger-bar"></span>
				<span className="nav__hamburger-bar"></span>
			</button>

			<ul className={`nav__list${open ? ' nav__list--open' : ''}`}>
				<li className="nav__logo-item">
					<Link to="/" className="nav__logo" aria-label="Startsida">
						<img src={hareImg} alt="Harpaviljongen logo" />
					</Link>
				</li>

				{navItems.map((item, index) => (
					<li
						className="nav__list-item"
						key={index}
						onClick={() => setOpen(false)}>
						<NavItem text={item.text} link={item.link} />
					</li>
				))}
			</ul>
		</nav>
	);
}

export default NavBar;

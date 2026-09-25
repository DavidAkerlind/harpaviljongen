import { useState, useEffect } from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import NavItem from '../NavItem/NavItem';
import hareImg from '../../assets/logo/hare-logo-green.svg';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { menuButtons, useSiteConfig } from '../../API/useSiteConfig';

function NavBar({ type = 'normal' }) {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const siteConfig = useSiteConfig();
	const { pages } = siteConfig;

	useEffect(() => {
		if (type !== 'hero') return;

		const handleScroll = () => {
			setScrolled(window.scrollY > window.innerHeight * 0.85);
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, [type]);

	// The menus (Meny, Vinlista and any created in the admin) link to the PDFs chosen in
	// the admin; Chambre, Evenemang and Galleri are shown or hidden from its "Sidor" page.
	const navItems = [
		{ key: 'home', text: 'Hem', link: '/' },
		...menuButtons(siteConfig, 'navbar').map((menu) => ({
			key: `menu-${menu.key}`,
			text: menu.label,
			link: menu.link,
		})),
		pages.chambre?.navbar && { key: 'chambre', text: 'Chambre', link: '/chambre' },
		{ key: 'hours', text: 'Öppettider', link: '#openingHours' },
		pages.events?.navbar && { key: 'events', text: 'Evenemang', link: '/events' },
		pages.gallery?.navbar && { key: 'gallery', text: 'Galleri', link: '/gallery' },
		// { key: 'contact', text: 'Kontakt', link: '#contactInfo' },
	].filter(Boolean);

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
						<img
							src={hareImg}
							alt="Café Harpaviljongens logotyp, en hare"
							width="1024"
							height="1024"
						/>
					</Link>
				</li>

				<li className="nav__list-item--book">
					<button
						className="nav__list-item nav__book-btn link"
						onClick={() => {
							setOpen(false);
							window.caspecoBooking?.openModal({
								system: 'se_caferes01',
								unit: '13',
							});
						}}>
						Boka bord
					</button>
				</li>

				{navItems.map((item) => (
					<li
						className="nav__list-item"
						key={item.key}
						onClick={() => setOpen(false)}>
						<NavItem text={item.text} link={item.link} />
					</li>
				))}

				<li className="nav__social">
					<a
						className="nav__social-link"
						href="https://www.instagram.com/cafeharpaviljongen/"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Gå till våran Instagram"
						onClick={() => setOpen(false)}>
						<FaInstagram size={30} />
					</a>
					<a
						className="nav__social-link"
						href="https://www.facebook.com/people/Harpaviljongen/61575221844274/"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Gå till våran Facebook"
						onClick={() => setOpen(false)}>
						<FaFacebook size={30} />
					</a>
				</li>

				<li className="nav__address">
					<a
						className="nav__address-link"
						href="https://maps.app.goo.gl/S3mPSRHvyqAbTYzUA"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Hitta till Harpaviljongen på Google Maps"
						onClick={() => setOpen(false)}>
						Södra Fiskartorpsvägen 29
						<br />
						114 33 Stockholm
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;

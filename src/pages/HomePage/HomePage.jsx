import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './homePage.css';

import NavBar from '../../components/NavBar/NavBar';
import Menu from '../../components/Menu/Menu';
import OpeningHours from '../../components/OpeningHours/OpeningHours';
import Flexbox from '../../components/Flexbox/Flexbox';
import hareLogo from '../../assets/logo/hare-logo-blue.svg';
import wineIllustration from '../../assets/illustrations/wineglass-filled.svg';
import clockIllustration from '../../assets/illustrations/clock.svg';
import PageHeader from '../../components/PageHeader/PageHeader';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import ChambreSection from '../../components/ChambreSection/ChambreSection';
import EventCalendar from '../../components/EventCalendar/EventCalendar';
import PageDesc from '../../components/PageDesc/PageDesc';

function HomePage() {
	const location = useLocation();

	useEffect(() => {
		if (location.hash) {
			const id = location.hash.replace('#', '');
			const el = document.getElementById(id);

			if (el) {
				el.scrollIntoView({ behavior: 'smooth' });
			}
		}
	}, [location]);

	return (
		<section className="page page-home">
			<NavBar />
			<PageHeader text="HARPAVILJONGEN" />
			<section className="page__top-section">
				<Button text="MENY" link="/menu" />
				<Button text="ÖPPETTIDER" link="#openingHours" />
				<Button text="EVENEMANG" link="#events" />
				<Button text="VINLISTA" link="/" />
			</section>
			<PageDesc />
			<Menu menuId="menu-lunch" img={hareLogo} />

			<Flexbox>
				<Menu menuId="menu-wine" img={wineIllustration} />
				<OpeningHours img={clockIllustration} />
			</Flexbox>
			<Flexbox>
				<ChambreSection />
			</Flexbox>
			<Flexbox>
				<EventCalendar />
			</Flexbox>

			<Footer></Footer>
		</section>
	);
}

export default HomePage;

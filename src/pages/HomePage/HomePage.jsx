import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './homePage.css';
import FadeIn from '../../components/FadeIn/FadeIn';

import NavBar from '../../components/NavBar/NavBar';
import Menu from '../../components/Menu/Menu';
import OpeningHours from '../../components/OpeningHours/OpeningHours';
import Flexbox from '../../components/Flexbox/Flexbox';
import hareLogo from '../../assets/logo/hare-logo-blue.svg';
import wineIllustration from '../../assets/illustrations/wineglass-filled.svg';
import clockIllustration from '../../assets/illustrations/clock.svg';
// import PageHeader from '../../components/PageHeader/PageHeader';
import Button from '../../components/Button/Button';
// import Footer from '../../components/Footer/Footer';
import FooterSection from '../../components/FooterSection/FooterSection';
import ChambreSection from '../../components/ChambreSection/ChambreSection';
import EventCalendar from '../../components/EventCalendar/EventCalendar';
import PageDesc from '../../components/PageDesc/PageDesc';
import HeroSection from '../../components/HeroSection/HeroSection';
import SeasonBookings from '../../components/SeasonBookings/SeasonBookings';

function HomePage() {
	const location = useLocation();

	useEffect(() => {
		document.title = 'Harpaviljongen – Café & Bistro i Stockholm';
	}, []);

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
			<HeroSection />
			{/* <PageHeader text="HARPAVILJONGEN" page="home" /> */}
			{/* <PageDesc /> */}
			{/* <Menu menuId="menu-lunch" img={hareLogo} /> */}
			{/* <FadeIn delay={100}>
				<Flexbox>
					<SeasonBookings />
				</Flexbox>
			</FadeIn> */}

			{/* <FadeIn>
				<h2 className="section__title">
					CAFÈ & RESTAURANG I STOCKHOLM
				</h2>
			</FadeIn> */}
			{/* <FadeIn>
				<h3 className="section__title">
					<br />
					FREDAG - SÖNDAG
				</h3>
			</FadeIn> */}

			<FadeIn>
				<h1 className="home__title">HARPAVILJONGEN</h1>
			</FadeIn>

			<section className="page__button-section">
				<section className="page__button-section--horizontal">
					<FadeIn>
						<Button text="MENY" link="/Ny_meny_kommer_snart.pdf" />
					</FadeIn>
					<FadeIn>
						<Button
							text="VINLISTA"
							link="/Ny_meny_kommer_snart.pdf"
						/>
					</FadeIn>
				</section>
				{/* <FadeIn>
					<Button
						text="BOKA BORD"
						onClick={() =>
							window.caspecoBooking?.openModal({
								system: 'se_caferes01',
								unit: '13',
							})
						}
					/>
				</FadeIn> */}
				{/* <FadeIn>
					<Button text="ÖPPETTIDER" link="#openingHours" />
				</FadeIn> */}
				{/* <FadeIn>
					<Button text="EVENEMANG" link="events" />
				</FadeIn> */}
				{/* <FadeIn>
					<Button text="BOKA BORD" link={'mailto:info@harpaviljongen.com'} />
				</FadeIn> */}
				{/* <FadeIn>
					<Button text={'CHAMBRE SÉPARÉE'} link="/chambre" />
				</FadeIn> */}
				{/* <FadeIn>
					<Button text={'GALLERI'} link="/gallery" />
				</FadeIn> */}
			</section>
			{/* <FadeIn>
				<Flexbox gap="8rem">
					<Menu menuId="menu-wine" img={wineIllustration} /> 

					<OpeningHours img={clockIllustration} />
				</Flexbox>
			</FadeIn> 
			*/}
			{/* <Flexbox>
				<EventCalendar />
			</Flexbox> */}
			{/* <FadeIn>
				<Flexbox>
					<ChambreSection />
				</Flexbox>
			</FadeIn> */}
			{/* <Flexbox>
				<EventCalendar />
			</Flexbox> */}
			{/* <FadeIn>
				<Button text="TILL TOPPEN" link={'#top'} />
			</FadeIn> */}
			<FadeIn>
				<FooterSection />
			</FadeIn>
		</section>
	);
}

export default HomePage;

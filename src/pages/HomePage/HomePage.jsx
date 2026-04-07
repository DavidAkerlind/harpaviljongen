import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './homePage.css';
import FadeIn from '../../components/FadeIn/FadeIn';

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
import HeroSection from '../../components/HeroSection/HeroSection';
import SeasonBookings from '../../components/SeasonBookings/SeasonBookings';

function HomePage() {
	const location = useLocation();

	const [menuUrl, setMenuUrl] = useState(null);

	useEffect(() => {
		if (location.hash) {
			const id = location.hash.replace('#', '');
			const el = document.getElementById(id);

			if (el) {
				el.scrollIntoView({ behavior: 'smooth' });
			}
		}
	}, [location]);

	useEffect(() => {
		fetch(
			'https://harpaviljongen-db-api.onrender.com/api/menu-pdfs/active?type=food',
		)
			.then((res) => res.json())
			.then((data) => {
				if (data.success) {
					const url = data.data.url.replace(
						'/raw/upload/',
						'/image/upload/',
					);
					setMenuUrl(url);
				}
			});
	}, []);
	return (
		<section className="page page-home">
			<NavBar />

			<HeroSection />

			<PageHeader text="HARPAVILJONGEN" page="home" />

			{/* <PageDesc /> */}
			{/* <Menu menuId="menu-lunch" img={hareLogo} /> */}
			{/* <FadeIn delay={100}>
				<Flexbox>
					<SeasonBookings />
				</Flexbox>
			</FadeIn> */}
			<FadeIn>
				<h2 className="section__title">ÖPPNAR FREDAG 10/4!</h2>
			</FadeIn>

			<section className="page__button-section">
				<FadeIn>
					<Button text="MENY" link="/MENY_HARPAN_4_april.pdf" />
				</FadeIn>
				<FadeIn>
					<Button
						text="VINLISTA"
						link="/VINLISTA_HARPAN_4_april.pdf"
					/>
				</FadeIn>
				<FadeIn>
					<Button text="ÖPPETTIDER" link="#openingHours" />
				</FadeIn>
				<FadeIn>
					<Button text="EVENEMANG" link="events" />
				</FadeIn>
				<FadeIn>
					<Button text="BOKA BORD" link={'mailto:info@exempel.se'} />
				</FadeIn>
				<FadeIn>
					<Button text={'CHAMBRE SÉPARÉE'} link="/chambre" />
				</FadeIn>
				<FadeIn>
					<Button text={'GALLERI'} link="/gallery" />
				</FadeIn>
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
				<Footer />
			</FadeIn>
		</section>
	);
}

export default HomePage;

import './menuPage.css';

// Components
import Menu from '../../components/Menu/Menu';
import NavBar from '../../components/NavBar/NavBar';
import PageHeader from '../../components/PageHeader/PageHeader';
import Flexbox from '../../components/Flexbox/Flexbox';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import Grid from '../../components/Grid/Grid';
import Button from '../../components/Button/Button';
import MenuSkeleton from '../../components/Skeleton/Skeleton';
import Footer from '../../components/Footer/Footer';
// Images
import hareLogo from '../../assets/logo/hare-logo-blue.svg';
import storeFront from '../../assets/illustrations/storefront.svg';
import grapes from '../../assets/illustrations/grapes.svg';
import bubblesglass from '../../assets/illustrations/bubblesglass.svg';
import cocktail from '../../assets/illustrations/cocktail.svg';
import cheese from '../../assets/illustrations/cheese.svg';
import wineImg from '../../assets/illustrations/winebottle.svg';
import cakeImg from '../../assets/illustrations/Cake2.svg';
import PageDesc from '../../components/PageDesc/PageDesc';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
function MenuPage() {
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
		<section className="page page-menu">
			<NavBar />
			<PageHeader text="VÅRAN MENY" />
			<section className="page__top-section">
				<Button text="HEM" link="/" />
				<Button text="ÖPPETTIDER" link="/" />
				<Button text="VINLISTA" link="/wine-list" />
			</section>

			<PageDesc />
			<Flexbox>
				<Menu menuId="menu-always" img={hareLogo} />
				<Menu menuId="menu-sweets" img={cakeImg} />
			</Flexbox>

			<Flexbox>
				<Flexbox align="flex-start">
					<Menu menuId="menu-all-wine" img="" />
					<Menu menuId="menu-wine-red" img={wineImg} />
				</Flexbox>
				<Menu menuId="menu-snacks" img={cheese} />
			</Flexbox>

			<Flexbox align="center">
				<Menu menuId="menu-bubbels" img={bubblesglass} />
				<Menu menuId="menu-cocktails" img={cocktail} />
				<Menu menuId="menu-beer" img="" />
			</Flexbox>
			<Button text="TILL TOPPEN" link={'#top'} />
			<Footer />
		</section>
	);
}

export default MenuPage;

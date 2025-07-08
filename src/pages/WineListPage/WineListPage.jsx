import './wineListPage.css';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import WineList from '../../components/WineList/WineList';
import NavBar from '../../components/NavBar/NavBar';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import PageHeader from '../../components/PageHeader/PageHeader';
import HeroSection from '../../components/HeroSection/HeroSection';
function WineListPage() {
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
		<section className="page page-winelist">
			{/* <NavBar /> */}
			<HeroSection type="wine" />
			<PageHeader text="VINLISTA" /> <WineList />
			<Button text="TILL TOPPEN" link={'#top'} />
			<Footer />
		</section>
	);
}

export default WineListPage;

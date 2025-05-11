import './menuPage.css';
import Menu from '../../components/Menu/Menu';
import NavBar from '../../components/NavBar/NavBar';
import PageHeader from '../../components/PageHeader/PageHeader';
import Flexbox from '../../components/Flexbox/Flexbox';
import hareLogo from '../../assets/logo/hare-logo-blue.svg';
import storeFront from '../../assets/illustrations/storefront.svg';
import grapes from '../../assets/illustrations/grapes.svg';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import Grid from '../../components/Grid/Grid';
import { menuSnacks, menuAlways, menuSweet } from '../../data/data';
import Button from '../../components/Button/Button';

function MenuPage() {
	return (
		<section className="page page-menu">
			<NavBar />
			<PageHeader text="HARPAVILJONGEN" />
			<section className="page__top-section">
				<Button text="HEM" link="/" />
			</section>
			<Menu menu={menuAlways} img={hareLogo} />
			<Flexbox>
				<Menu menu={menuSweet} img="" />
				<Menu menu={menuSnacks} img={grapes} />
			</Flexbox>
		</section>
	);
}

export default MenuPage;

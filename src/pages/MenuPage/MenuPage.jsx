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
import Button from '../../components/Button/Button';

function MenuPage() {
	return (
		<section className="page page-menu">
			<NavBar />
			<PageHeader text="HARPAVILJONGEN" />
			<section className="page__top-section">
				<Button text="HEM" link="/" />
			</section>
			<Menu menuId="menu-always" img={hareLogo} />
			<Flexbox>
				<Menu menuId="menu-sweets" img="" />
				<Menu menuId="menu-snacks" img={grapes} />
			</Flexbox>
			<Flexbox></Flexbox>
			<Flexbox>
				<Menu menuId="menu-bubbels" img="" />
				<Menu menuId="menu-coctails" img="" />
				<Menu menuId="menu-beer" img="" />
			</Flexbox>
		</section>
	);
}

export default MenuPage;

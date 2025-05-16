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
// Images
import hareLogo from '../../assets/logo/hare-logo-blue.svg';
import storeFront from '../../assets/illustrations/storefront.svg';
import grapes from '../../assets/illustrations/grapes.svg';
import bubblesglass from '../../assets/illustrations/bubblesglass.svg';
import cocktail from '../../assets/illustrations/cocktail.svg';

function MenuPage() {
	return (
		<section className="page page-menu">
			<NavBar />
			<PageHeader text="HARPAVILJONGEN" />
			<section className="page__top-section">
				<Button text="HEM" link="/" />
				<Button text="ÖPPETTIDER" link="/" />
				<Button text="NYHETER" link="/" />
			</section>
			<Menu menuId="menu-always" img={hareLogo} />
			<Flexbox>
				<Menu menuId="menu-sweets" img="" />
				<Menu menuId="menu-snacks" img={grapes} />
			</Flexbox>
			<Flexbox></Flexbox>
			<Flexbox>
				<Menu menuId="menu-bubbels" img={bubblesglass} />
				<Menu menuId="menu-cocktails" img={cocktail} />
				<Menu menuId="menu-beer" img="" />
			</Flexbox>
		</section>
	);
}

export default MenuPage;

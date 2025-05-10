import Menu from '../../components/Menu/Menu';
import NavBar from '../../components/NavBar/NavBar';
import PageHeader from '../../components/PageHeader/PageHeader';
import Flexbox from '../../components/Flexbox/Flexbox';
import hareLogo from '../../assets/logo/hare-logo-blue.svg';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import Grid from '../../components/Grid/Grid';
import { menuSnacks, menuAlways, menuSweet } from '../../data/data';

function MenuPage() {
	return (
		<section className="page page-menu">
			<NavBar />
			<PageHeader text="HARPAVILJONGEN" />
			<Menu menu={menuAlways} img={hareLogo} />
			<Flexbox>
				<Menu menu={menuSweet} img="" />
				<Menu menu={menuSnacks} img="" />
			</Flexbox>
		</section>
	);
}

export default MenuPage;

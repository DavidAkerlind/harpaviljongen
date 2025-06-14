import './wineListPage.css';
import WineList from '../../components/WineList/WineList';
import NavBar from '../../components/NavBar/NavBar';

function WineListPage() {
	return (
		<section className="page page-winelist">
			<NavBar />
			<WineList />
		</section>
	);
}

export default WineListPage;

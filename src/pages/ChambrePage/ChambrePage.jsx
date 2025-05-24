import ChambreMenu from '../../components/ChambreMenu/ChambreMenu';
import NavBar from '../../components/NavBar/NavBar';
import PageHeader from '../../components/PageHeader/PageHeader';
import chambreImage from '../../assets/pictures/chambre-separe.jpg';
import './chambrePage.css';
import ChambreSection from '../../components/ChambreSection/ChambreSection';
import Footer from '../../components/Footer/Footer';

function ChambrePage() {
	return (
		<main className="page page-chambre">
			<NavBar />
			<PageHeader text="CHAMBRE SÈPARÈE" />

			<section className="page-chambre__content">
				<h2 className="page-chambre__subtitle">
					En middag värd att minnas
				</h2>
				<section className="page-chambre__intro">
					<p>
						Välkommen in i vår chambre séparée – en plats där tiden
						saktar ner, där smakerna fördjupas och där vinet alltid
						står i centrum. Här bjuder vi in till en kväll som lika
						gärna kunde ha ägt rum hemma hos någon av oss. Fast med
						det lilla extra.
					</p>
				</section>
				<figure className="page-chambre__image-container">
					<img
						src={chambreImage}
						alt="Rund dukad middag i chambre séparée"
						className="page-chambre__image"
					/>
				</figure>

				<ChambreMenu />
			</section>
			<Footer />
		</main>
	);
}

export default ChambrePage;

import ChambreMenu from '../../components/ChambreMenu/ChambreMenu';
import NavBar from '../../components/NavBar/NavBar';
import PageHeader from '../../components/PageHeader/PageHeader';
import chambreImage1 from '../../assets/pictures/ProImages/thumbnail_Restaurangporträtt_Harpaviljongen_IG_A-8.jpg';
import chambreImage2 from '../../assets/pictures/ProImages/thumbnail_Restaurangporträtt_Harpaviljongen_IG_A-11.jpg';

import './chambrePage.css';
import ChambreSection from '../../components/ChambreSection/ChambreSection';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import FadeIn from '../../components/FadeIn/FadeIn';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function ChambrePage() {
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
		<main className="page page-chambre">
			<NavBar />

			<PageHeader text="CHAMBRE SÉPARÉE" />

			<FadeIn delay={100}>
				<section className="page__top-section page__top-section--chambre">
					<Button text="BOKA NU" link={'mailto:info@exempel.se'} />
					<Button text="CHAMBRE MENYN" link={'#chambreMenu'} />
				</section>
			</FadeIn>

			<section className="page-chambre__content">
				<FadeIn delay={150}>
					<h2 className="page-chambre__subtitle">
						En middag värd att minnas
					</h2>
				</FadeIn>
				<FadeIn delay={250}>
					<section className="page-chambre__intro">
						<p>
							Välkommen in i vår chambre séparée – en plats där
							tiden saktar ner, där smakerna fördjupas och där
							vinet <u>alltid</u> står i centrum. Här bjuder vi in
							till en kväll som lika gärna kunde ha ägt rum hemma
							hos någon av oss. Fast med det lilla extra.
						</p>
					</section>
				</FadeIn>
				<FadeIn delay={350}>
					<figure className="page-chambre__image-container">
						<img
							src={chambreImage1}
							alt="Rund dukad middag i chambre séparée"
							className="page-chambre__image"
						/>
						<img
							src={chambreImage2}
							alt="Vitrinskåp med vinglas"
							className="page-chambre__image"
						/>
					</figure>
				</FadeIn>

				<ChambreMenu />
			</section>
			<FadeIn>
				<Button text="TILL TOPPEN" link={'#top'} />
			</FadeIn>
			<FadeIn>
				<Footer />
			</FadeIn>
		</main>
	);
}

export default ChambrePage;

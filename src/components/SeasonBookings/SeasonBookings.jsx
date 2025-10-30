import './seasonBookings.css';
import '../ChambreSection/chambreSection.css';
import Button from '../Button/Button';

import seasonImage1 from '../../assets/pictures/ProImages/thumbnail_Restaurangporträtt_Harpaviljongen_IG_A-1.jpg';
import seasonImage2 from '../../assets/pictures/ProImages/thumbnail_Restaurangporträtt_Harpaviljongen_IG_A-16.jpg';

function SeasonBookings() {
	return (
		<section className="chambre">
			<header className="chambre__header">
				<h2 className="section__title">STÄNGT FÖR SÄSONGEN</h2>

				<p className="chambre__text">
					Harpaviljongen håller just nu stängt för säsongen medan vi
					genomför en omfattande renovering inför nästa år. <br />{' '}
					<br /> Vi tar redan nu emot förfrågningar om abonnering och
					bokningar av större sällskap inför 2026 oavsett om det
					gäller en somrig företagsmiddag, födelsedag eller ett
					kvällsmingel under trädkronorna. <br />
					<br />
					Vi ses nästa säsong! <br />
					<br />
				</p>
			</header>

			<section className="chambre__button-section">
				<Button
					text={'BOKA 2026'}
					link={'mailto:info@harpaviljongen.com'}
				/>
				<Button text={'RING'} link={'mailto:info@harpaviljongen.com'} />
			</section>
			<figure className="chambre__image-container">
				<img
					src={seasonImage1}
					alt="dukad middag i chambre séparée"
					className="chambre__image"
				/>
				<img
					src={seasonImage2}
					alt="Vitrinskål med vinglas"
					className="chambre__image"
				/>
			</figure>
		</section>
	);
}

export default SeasonBookings;

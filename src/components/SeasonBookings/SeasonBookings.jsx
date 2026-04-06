import './seasonBookings.css';
import '../ChambreSection/chambreSection.css';
import Button from '../Button/Button';

import seasonImage1 from '../../assets/pictures/ProImages/thumbnail_Restaurangporträtt_Harpaviljongen_IG_A-1.jpg';
import seasonImage2 from '../../assets/pictures/ProImages/thumbnail_Restaurangporträtt_Harpaviljongen_IG_A-16.jpg';

function SeasonBookings() {
	return (
		<section className="chambre chambre--no-background">
			<header className="chambre__header">
				<h2 className="section__title">Öppnar fredag 10/4!</h2>

				<p className="chambre__text">
					<br /> Vi smygstartar säsongen i april med öppet
					fredag–söndag från 14:00 till sent.
					<br />
					<br />
					De allra soligaste dagarna kan det även dyka upp dagens
					lunch. Då vädret är föränderligt uppdaterar vi löpande våra
					sociala kanaler med aktuell information.
					<br />
					<br />
					Chambre séparée går givetvis att boka som vanligt. Från och
					med maj går vi upp i full drift med frukostservering från
					08:00 och öppet sju dagar i veckan.
					<br />
					<br />
					Varmt välkommna!
				</p>
			</header>

			<section className="chambre__button-section">
				<Button text={'BOKA'} link={'mailto:info@harpaviljongen.com'} />
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

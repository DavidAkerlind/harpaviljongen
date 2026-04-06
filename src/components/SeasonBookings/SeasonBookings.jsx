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
			</header>

			<section className="chambre__button-section">
				<Button text={'BOKA'} link={'mailto:info@harpaviljongen.com'} />
				<Button text={'RING'} link={'mailto:info@harpaviljongen.com'} />
			</section>
			{/* <figure className="chambre__image-container">
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
			</figure> */}
		</section>
	);
}

export default SeasonBookings;

import './chambreSection.css';
import chambreImage1 from '../../assets/pictures/ProImages/thumbnail_Restaurangporträtt_Harpaviljongen_IG_A-8.jpg';
import chambreImage2 from '../../assets/pictures/ProImages/thumbnail_Restaurangporträtt_Harpaviljongen_IG_A-11.jpg';

import Button from '../Button/Button';

const ChambreSection = () => {
	return (
		<section className="chambre">
			<header className="chambre__header">
				<h2 className="section__title">CHAMBRE SÈPARÈE</h2>

				<p className="chambre__text">
					En kväll i vår mest omsorgsfulla vrå. Där glas klingar
					lågmält, smaker dröjer sig kvar och tiden tycks sakta in.
					Fem serveringar. Noggrant utvalda råvaror. Viner med själ.
					<br /> <br /> <br />
					Vill du förfina upplevelsen ytterligare, står vår sommelier
					Elsa Hurtig redo att guida dig genom vinets värld – och
					självklart har vi omsorgsfullt utvalda alkoholfria
					alternativ. <br /> <br /> <br /> En kväll i vårt chambre
					séparée är mer än en middag. Det är ett minne i vardande.
					Välkommen.
				</p>
			</header>

			<section className="chambre__button-section">
				<Button text={'MER INFO'} link="/chambre" />
				<Button text={'BOKA'} link={'mailto:info@harpaviljongen.se'} />
			</section>
			<figure className="chambre__image-container">
				<img
					src={chambreImage1}
					alt="Rund dukad middag i chambre séparée"
					className="chambre__image"
				/>
				<img
					src={chambreImage2}
					alt="Rund dukad middag i chambre séparée"
					className="chambre__image"
				/>
			</figure>
		</section>
	);
};

export default ChambreSection;

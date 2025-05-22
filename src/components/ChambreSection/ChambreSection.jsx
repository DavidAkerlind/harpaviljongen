import './chambreSection.css';
import banner from '../../assets/illustrations/banner.svg';
import chambreImage from '../../assets/pictures/chambre-separe.JPEG';

const ChambreSection = () => {
	return (
		<section className="chambre">
			<header className="chambre__header">
				<h2 className="chambre__title">CHAMBRE SÈPARÈE</h2>
				<p className="chambre__text">
					I vårat chambre séparée är du välkommen att boka för större
					sällskap, för födelsedagen eller för festen!
				</p>
			</header>

			<p className="chambre__subtext">
				För bokning eller mer info vänligen maila
			</p>
			<figure className="chambre__banner">
				<img src={banner} alt="Banner for email" />
			</figure>
			<a href="mailto:info@exempel.se" className="chambre__email">
				info@exempel.se
			</a>

			<figure className="chambre__image-container">
				<img
					src={chambreImage}
					alt="Rund dukad middag i chambre séparée"
					className="chambre__image"
				/>
			</figure>
		</section>
	);
};

export default ChambreSection;

import './heroSection.css';
import homePicture from '../../assets/pictures/gallery/sasi-4xOsg3MW7cQ-unsplash.jpg';
import winePicture from '../../assets/pictures/wineHero.jpg';
import logoBlue from '../../assets/logo/hare-logo-blue.svg';
import logoWhite from '../../assets/logo/hare-logo-white.svg';
import NavBar from '../../components/NavBar/NavBar';

function HeroSection({ type = 'home' }) {
	let imageSrc = homePicture;
	let logoSrc = logoWhite;

	// Välj bild och logga beroende på type
	if (type === 'home') {
		imageSrc = homePicture;
		logoSrc = logoWhite;
	} else if (type === 'wine') {
		imageSrc = winePicture;
		logoSrc = logoWhite;
	}
	return (
		<section className={`hero-section hero-section--${type}`}>
			<NavBar type="hero" />
			<img
				className="hero-section__img"
				src={imageSrc}
				alt="Hero picture"
			/>
			<div className="hero-section__overlay"></div>
			<figure className="hero-section__figure">
				<img src={logoSrc} alt="hare logo" />
			</figure>
		</section>
	);
}

export default HeroSection;

import './heroSection.css';
import heroPicture from '../../assets/pictures/heropicture.png';
import logoBlue from '../../assets/logo/hare-logo-blue.svg';
import logoWhite from '../../assets/logo/hare-logo-white.svg';
import NavBar from '../../components/NavBar/NavBar';

function HeroSection() {
	return (
		<section className="hero-section">
			<NavBar type="hero" />
			<img
				className="hero-section__img"
				src={heroPicture}
				alt="Hero picture"
			/>
			<div className="hero-section__overlay"></div>
			<figure className="hero-section__figure">
				<img src={logoBlue} alt="hare logo" />
			</figure>
		</section>
	);
}

export default HeroSection;

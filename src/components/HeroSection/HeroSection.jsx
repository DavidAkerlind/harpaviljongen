import './heroSection.css';
import winePicture from '../../assets/pictures/ProImages/thumbnail_Restaurangporträtt_Harpaviljongen_IG_A-11.jpg';
import wineLogo from '../../assets/wine-logo.svg';
import logoWhite from '../../assets/logo/hare-logo-green.svg';
import NavBar from '../../components/NavBar/NavBar';
import Button from '../Button/Button';
import '../Button/button.css';
import HeroSlideshow from './HeroSlideshow';
import { HERO_SLIDES } from './heroSlides';

const HERO_CONTENT = {
	home: {
		// A slideshow; the photos are in heroSlides.js
		slides: HERO_SLIDES,
		logo: logoWhite,
		logoAlt: 'Café Harpaviljongens logotyp, en hare',
		logoWidth: 1024,
		logoHeight: 1024,
	},
	wine: {
		image: winePicture,
		imageAlt:
			'Vinglas uppradade i ett vitrinskåp av mahogny på Café Harpaviljongen',
		logo: wineLogo,
		logoAlt: 'Café Harpaviljongens vinlistelogotyp',
		logoWidth: 378,
		logoHeight: 748,
	},
};

function HeroSection({ type = 'home' }) {
	const content = HERO_CONTENT[type] ?? HERO_CONTENT.home;
	return (
		<section className={`hero-section hero-section--${type}`}>
			{/* <NavBar type="hero" /> */}
			{content.slides ? (
				<HeroSlideshow slides={content.slides} />
			) : (
				<img
					className="hero-section__img"
					src={content.image}
					alt={content.imageAlt}
					fetchPriority="high"
					decoding="async"
				/>
			)}
			<div className="hero-section__overlay"></div>
			<div className="hero-section__content">
				<figure className="hero-section__figure">
					<img
						src={content.logo}
						alt={content.logoAlt}
						width={content.logoWidth}
						height={content.logoHeight}
					/>
				</figure>
				{type === 'home' && (
					<div className="hero-section__cta">
						<Button
							className="button--hero-section"
							text="BOKA BORD"
							onClick={() =>
								window.caspecoBooking?.openModal({
									system: 'se_caferes01',
									unit: '13',
								})
							}
						/>
					</div>
				)}
			</div>
		</section>
	);
}

export default HeroSection;

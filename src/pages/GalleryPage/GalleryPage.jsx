import './galleryPage.css';
// Importera ALLA bilder från assets/pictures/gallery
import img1 from '../../assets/pictures/gallery/image.png';
import img2 from '../../assets/pictures/gallery/image 5.png';
import img3 from '../../assets/pictures/gallery/Rectangle 11.png';
import img4 from '../../assets/pictures/gallery/Rectangle 12.png';
import img5 from '../../assets/pictures/gallery/Rectangle 13.png';
import img6 from '../../assets/pictures/gallery/Rectangle 14.png';
import img7 from '../../assets/pictures/gallery/Screenshot 2025-05-17 170515 1.png';
import img8 from '../../assets/pictures/gallery/Screenshot 2025-05-17 171231.png';
import img9 from '../../assets/pictures/gallery/Screenshot 2025-05-17 171253.png';
import img10 from '../../assets/pictures/gallery/Screenshot 2025-05-17 171434.png';
import img11 from '../../assets/pictures/gallery/Screenshot 2025-05-17 171458.png';
import img12 from '../../assets/pictures/gallery/Screenshot 2025-05-17 171521.png';
import img13 from '../../assets/pictures/gallery/Screenshot 2025-05-17 171549.png';
import img14 from '../../assets/pictures/gallery/Screenshot 2025-05-17 171647.png';
import img15 from '../../assets/pictures/gallery/Screenshot 2025-05-17 171650.png';
import img16 from '../../assets/pictures/gallery/Screenshot 2025-05-17 171651.png';
import img17 from '../../assets/pictures/gallery/Screenshot 2025-05-17 171652.png';
import img18 from '../../assets/pictures/gallery/adolfo-felix-M5aKYYiRYkc-unsplash.jpg';
import img19 from '../../assets/pictures/gallery/angelo-pantazis-s4OQqi9fhZs-unsplash.jpg';
import img20 from '../../assets/pictures/gallery/dan-rooney-6gMoL8apk8I-unsplash.jpg';
import img21 from '../../assets/pictures/gallery/dimitri-karastelev-oboIHvXKYWc-unsplash.jpg';
import img22 from '../../assets/pictures/gallery/kamilla-isalieva-JDjarj_oSyo-unsplash.jpg';
import img23 from '../../assets/pictures/gallery/maddi-bazzocco-ikJVpxUK4ZA-unsplash.jpg';
import img24 from '../../assets/pictures/gallery/sasi-4xOsg3MW7cQ-unsplash.jpg';
// COMPONENTER
import NavBar from '../../components/NavBar/NavBar';
import Carousel from '../../components/Carousel/Carousel';
import PageHeader from '../../components/PageHeader/PageHeader';
import Footer from '../../components/Footer/Footer';

// Lägg till de nya bilderna i karusellerna
const largeImages = [
	{ src: img18, alt: 'Uteservering kväll' },
	{ src: img19, alt: 'Sommarkväll' },
	{ src: img20, alt: 'Mat och dryck' },
	{ src: img21, alt: 'Detalj interiör' },
];

const smallImages = [
	{ src: img7, alt: 'Bar och dryck' },
	{ src: img8, alt: 'Uteservering' },
	{ src: img9, alt: 'Stämning' },
	{ src: img10, alt: 'Mingel' },
	{ src: img11, alt: 'Detalj' },
	{ src: img12, alt: 'Kväll' },
	{ src: img13, alt: 'Mat' },
	{ src: img14, alt: 'Sällskap' },
	{ src: img15, alt: 'Glas' },
	{ src: img16, alt: 'Bord' },
	{ src: img17, alt: 'Vin' },
	{ src: img22, alt: 'Fönsterbord' },
	{ src: img23, alt: 'Sommarbord' },
	{ src: img24, alt: 'Grönt och skönt' },
];
const smallImages2 = [
	{ src: img2, alt: 'Uteservering' },
	{ src: img3, alt: 'Stämning' },
	{ src: img1, alt: 'Bar och dryck' },
	{ src: img5, alt: 'Detalj' },
	{ src: img6, alt: 'Detalj' },
	{ src: img4, alt: 'Mingel' },
];

function GalleryPage() {
	return (
		<main className="page page-gallery">
			<NavBar />
			<PageHeader text={'GALLERI'} />
			<Carousel images={largeImages} type="big" />
			<Carousel images={smallImages2} type="small" />
			<Carousel images={smallImages} type="small" />

			<p className="gallery__footer-text">
				Vi inspireras av det franska köket men låter även våra egna
				minnen, favoriter och smaker få ta plats. <br />
				<br />
				Välkommen hem till Harpaviljongen.
			</p>
			<Footer />
		</main>
	);
}

export default GalleryPage;

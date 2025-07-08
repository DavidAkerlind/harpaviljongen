import './galleryPage.css';
// Importera ALLA bilder från assets/pictures/gallery
import img1 from '../../assets/pictures/ProImages/thumbnail_Restaurangporträtt_Harpaviljongen_IG_A-1.jpg';
import img2 from '../../assets/pictures/ProImages/thumbnail_Restaurangporträtt_Harpaviljongen_IG_A-2.jpg';
import img3 from '../../assets/pictures/ProImages/thumbnail_Restaurangporträtt_Harpaviljongen_IG_A-3.jpg';
import img4 from '../../assets/pictures/ProImages/thumbnail_Restaurangporträtt_Harpaviljongen_IG_A-4.jpg';
import img5 from '../../assets/pictures/ProImages/thumbnail_Restaurangporträtt_Harpaviljongen_IG_A-5.jpg';
import img6 from '../../assets/pictures/ProImages/thumbnail_Restaurangporträtt_Harpaviljongen_IG_A-6.jpg';
import img7 from '../../assets/pictures/ProImages/thumbnail_Restaurangporträtt_Harpaviljongen_IG_A-7.jpg';
import img8 from '../../assets/pictures/ProImages/thumbnail_Restaurangporträtt_Harpaviljongen_IG_A-8.jpg';
import img9 from '../../assets/pictures/ProImages/thumbnail_Restaurangporträtt_Harpaviljongen_IG_A-9.jpg';
import img10 from '../../assets/pictures/gallery/Screenshot 2025-05-17 171434.png';
import img11 from '../../assets/pictures/gallery/Screenshot 2025-05-17 171458.png';
import img12 from '../../assets/pictures/gallery/Screenshot 2025-05-17 171521.png';
import img13 from '../../assets/pictures/ProImages/thumbnail_Restaurangporträtt_Harpaviljongen_IG_A-10.jpg';
import img14 from '../../assets/pictures/gallery/Screenshot 2025-05-17 171647.png';
import img15 from '../../assets/pictures/gallery/Screenshot 2025-05-17 171650.png';
import img16 from '../../assets/pictures/gallery/Screenshot 2025-05-17 171651.png';
import img17 from '../../assets/pictures/ProImages/thumbnail_Restaurangporträtt_Harpaviljongen_IG_A-11.jpg';
import img18 from '../../assets/pictures/ProImages/thumbnail_Restaurangporträtt_Harpaviljongen_IG_A-12.jpg';
import img19 from '../../assets/pictures/ProImages/thumbnail_Restaurangporträtt_Harpaviljongen_IG_A-13.jpg';
import img20 from '../../assets/pictures/ProImages/thumbnail_Restaurangporträtt_Harpaviljongen_IG_A-14.jpg';
import img21 from '../../assets/pictures/ProImages/thumbnail_Restaurangporträtt_Harpaviljongen_IG_A-15.jpg';
import img22 from '../../assets/pictures/ProImages/thumbnail_Restaurangporträtt_Harpaviljongen_IG_A-16.jpg';

('../../assets/pictures/ProImages/thumbnail_Restaurangporträtt_Harpaviljongen_IG_A-4.jpg');

// COMPONENTER
import NavBar from '../../components/NavBar/NavBar';
import Carousel from '../../components/Carousel/Carousel';
import PageHeader from '../../components/PageHeader/PageHeader';
import Footer from '../../components/Footer/Footer';

// Lägg till de nya bilderna i karusellerna
const largeImages = [
	{ src: img22, alt: 'Uteservering kväll' },
	{ src: img3, alt: 'Sommarkväll' },
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
	{ src: img18, alt: 'Fönsterbord' },
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

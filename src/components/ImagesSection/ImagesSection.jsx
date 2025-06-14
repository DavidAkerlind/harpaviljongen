import './imagesSection.css';
import img1 from '../../assets/pictures/images/image1.png';
import img2 from '../../assets/pictures/images/image2.png';
import img3 from '../../assets/pictures/images/image3.png';
import img1big from '../../assets/pictures/images/image1big.png';
import img2big from '../../assets/pictures/images/image2big.png';

function ImagesSection() {
	return (
		<section className="images-section">
			<section className="images__small-section">
				<figure className="small-section__img-container">
					<img
						src={img1}
						alt="Bild 1"
						className="images-section__img"
					/>
				</figure>
				<figure className="small-section__img-container">
					<img
						src={img2}
						alt="Bild 2"
						className="images-section__img"
					/>
				</figure>
				<figure className="small-section__img-container">
					<img
						src={img3}
						alt="Bild 3"
						className="images-section__img"
					/>
				</figure>
			</section>
			<section className="images__big-section">
				<figure className="big-section__img-container">
					<img
						src={img1big}
						alt="Bild 1 stor"
						className="images-section__img--big"
					/>
				</figure>
				<figure className="big-section__img-container">
					<img
						src={img2big}
						alt="Bild 2 stor"
						className="images-section__img--big"
					/>
				</figure>
			</section>
		</section>
	);
}

export default ImagesSection;

import Slider from 'react-slick';
import './carousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Carousel({ images, type = 'small' }) {
	const isSmall = type === 'small';

	const settings = isSmall
		? {
				dots: false,
				infinite: true,
				speed: 1500,
				slidesToShow: 4,
				slidesToScroll: 4,
				autoplay: true,
				autoplaySpeed: 6000,
				cssEase: 'ease-in-out',
				arrows: false,
				responsive: [
					{
						breakpoint: 900,
						settings: { slidesToShow: 4 },
					},
					{
						breakpoint: 600,
						settings: { slidesToShow: 3 },
					},
				],
		  }
		: {
				dots: true,
				infinite: true,
				speed: 1500,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 6000,
				cssEase: 'ease-in-out',
				arrows: false,
		  };

	return (
		<div className={isSmall ? 'small-carousel' : 'big-carousel'}>
			<Slider {...settings}>
				{images.map((img, idx) => (
					<div
						key={idx}
						className={
							isSmall
								? 'small-carousel__slide'
								: 'big-carousel__slide'
						}>
						<img
							src={img.src}
							alt={img.alt}
							className={
								isSmall
									? 'small-carousel__img'
									: 'big-carousel__img'
							}
							width={isSmall ? 200 : 600}
							height={isSmall ? 200 : 340}
							draggable={false}
						/>
					</div>
				))}
			</Slider>
		</div>
	);
}

export default Carousel;

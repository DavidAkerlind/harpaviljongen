import './BackgroundImage.css'; // om du har någon CSS för den

function BackgroundImage({ img, altText = 'harpaviljongen logo', type = '' }) {
	return (
		<figure className={`background-img ${type}`}>
			<img src={img} alt={altText} loading="lazy" />
		</figure>
	);
}

export default BackgroundImage;

import { FaInstagram, FaFacebook } from 'react-icons/fa';
import './followUs.css';

function FollowUs() {
	return (
		<section className="follow-us">
			<h3 className="follow-us__title">FÖLJ OSS</h3>
			<div className="follow-us__icons">
				<a
					className="follow-us__icon-link"
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.instagram.com/cafeharpaviljongen/"
					aria-label="Gå till våran instagram">
					<FaInstagram size={40} />
				</a>
				<a
					className="follow-us__icon-link"
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.facebook.com/people/Harpaviljongen/61575221844274/"
					aria-label="Gå till våran Facebook">
					<FaFacebook size={40} />
				</a>
			</div>
		</section>
	);
}

export default FollowUs;

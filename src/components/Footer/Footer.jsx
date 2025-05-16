import { FaInstagram } from 'react-icons/fa';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<footer className="footer">
			<nav className="footer__section" aria-label="Länkar">
				<h3 className="footer__heading">Länkar</h3>
				<ul className="footer__list">
					<li className="footer__list-item">
						<Link to="/menu">Meny</Link>
					</li>
					<li className="footer__list-item">
						<a href="mailto:exempel@mail.se">Mail</a>
					</li>
					<li className="footer__list-item">
						<a href="tel:070123456789">070123456789</a>
					</li>
				</ul>
			</nav>

			<section className="footer__section">
				<h3 className="footer__heading">Följ oss</h3>
				<a
					className="footer__icon-wrapper"
					href="https://www.instagram.com/harpaviljongen1912/">
					<FaInstagram
						size={50}
						color="var(----color-blue-dark)"
						className="footer__icon"
					/>
				</a>
			</section>

			<address className="footer__section">
				<h3 className="footer__heading">Hitta oss</h3>
				<div className="footer__map-wrapper">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.598098706059!2d18.07819327711369!3d59.34991467462426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77e4e4ac369f%3A0xea2a85e76094044d!2sHarpaviljongen!5e1!3m2!1ssv!2sse!4v1747399426405!5m2!1ssv!2sse&t=m"
						width="100%"
						height="100%"
						loading="lazy"
						style={{ border: 0 }}
						referrerpolicy="no-referrer-when-downgrade"></iframe>
				</div>
				<a
					className="footer__list-item footer__list-item--small"
					href="https://maps.app.goo.gl/S3mPSRHvyqAbTYzUA">
					Södra Fiskartorpsvägen 29, 114 33 Stockholm
				</a>
			</address>
		</footer>
	);
}

export default Footer;

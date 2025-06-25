import { FaInstagram } from 'react-icons/fa';
import './Footer.css';

function Footer() {
	return (
		<footer id="contactInfo" className="footer">
			<nav className="footer__section" aria-label="Länkar">
				<h3 className="footer__heading">KONTAKT</h3>
				<ul className="footer__list">
					<li className="footer__list-item">
						<span className="list-item__title">Telefon</span>
						<a
							className="list-item__link"
							aria-label="Ring till oss på Harpaviljongen"
							href="tel:070123456789">
							08-123456
						</a>
					</li>
					<li className="footer__list-item">
						<span className="list-item__title">Email</span>
						<a
							className="list-item__link"
							aria-label="Maila till oss på Harpaviljongen"
							href="mailto:info@harpaviljongen.se">
							info@harpaviljongen.se
						</a>
					</li>
					<li className="footer__list-item">
						<span className="list-item__title">Adress</span>
						<a
							aria-label="Länk till google maps för att hitta till Harpaviljongen"
							className="list-item__link"
							target="_blank"
							href="https://maps.app.goo.gl/S3mPSRHvyqAbTYzUA">
							Södra Fiskartorpsvägen 29
							<br />
							114 33 Stockholm
						</a>
					</li>
				</ul>
			</nav>

			<section className="footer__section">
				<h3 className="footer__heading">FÖLJ OSS</h3>
				<a
					className="footer__icon-wrapper"
					target="_blank"
					href="https://www.instagram.com/harpaviljongen1912/"
					aria-label="Gå till våran instagram">
					<FaInstagram
						size={50}
						color="var(----color-blue-dark)"
						className="footer__icon"
					/>
				</a>
			</section>

			<address className="footer__section">
				<h3 className="footer__heading">HITTA OSS</h3>
				<div
					aria-label="En karta över övre östermalm med pin på Harpavilongens plats"
					className="footer__map-wrapper">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.598098706059!2d18.07819327711369!3d59.34991467462426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77e4e4ac369f%3A0xea2a85e76094044d!2sHarpaviljongen!5e0!3m2!1ssv!2sse!4v1747399426405!5m2!1ssv!2sse&t=m"
						width="100%"
						height="100%"
						loading="lazy"
						style={{ border: 0 }}
						referrerPolicy="no-referrer-when-downgrade"></iframe>
				</div>
			</address>
		</footer>
	);
}

export default Footer;

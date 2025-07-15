import { FaInstagram, FaFacebook } from 'react-icons/fa';
import './Footer.css';
import OpeningHours from '../OpeningHours/OpeningHours';
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
							href="tel:07067771667">
							076-777 16 67
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
				<section className="footer__icon-frame">
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
					<a
						className="footer__icon-wrapper"
						target="_blank"
						href="https://www.facebook.com/people/Harpaviljongen/61575221844274/"
						aria-label="Gå till våran Facebook">
						<FaFacebook
							size={50}
							color="var(----color-blue-dark)"
							className="footer__icon"
						/>
					</a>
				</section>
			</section>

			<address className="footer__section">
				<section id="openingHours" className="footer__map-wrapper">
					<OpeningHours type="small" />
				</section>
			</address>

			<div className="footer__copyright">
				<p>Copyright © 2025 Harpaviljongen AB</p>
			</div>
		</footer>
	);
}

export default Footer;

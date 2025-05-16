import './footer.css';

import { FaInstagram } from 'react-icons/fa';

function Footer() {
	return (
		<footer className="footer">
			<div className="footer-section">
				<h4>Länkar</h4>
				<ul>
					<li>
						<a href="#/menu">Meny</a>
					</li>
					<li>
						<a href="#/contact">Kontakt</a>
					</li>
					<li>
						<a
							href="https://www.instagram.com/harpaviljongen1912/"
							target="_blank"
							rel="noopener noreferrer">
							Insta
						</a>
					</li>
				</ul>
			</div>

			<div className="footer-section">
				<h4>Följ oss</h4>
				<FaInstagram size={40} color="var(----color-blue-dark)" />
			</div>

			<div className="footer-section">
				<h4>Hitta oss</h4>
				<iframe
					title="Harpeviljongen"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.243942982371!2d18.06621771588263!3d59.340619281662825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77f6d1d9c1cf%3A0x4c5e7cf7ed27ee3a!2sHarpeviljongen!5e0!3m2!1ssv!2sse!4v1683211585957!5m2!1ssv!2sse"
					width="200"
					height="150"
					style={{ border: 0 }}
					allowFullScreen=""
					loading="lazy"></iframe>
			</div>
		</footer>
	);
}

export default Footer;

import './contact.css';

function Contact() {
	return (
		<nav id="contactInfo" className="contact" aria-label="Kontaktuppgifter">
			<h3 className="contact__title">KONTAKT</h3>
			<ul className="contact__list">
				<li className="contact__item">
					<span className="contact__label">Telefon</span>
					<a
						className="contact__link"
						aria-label="Ring till oss på Harpaviljongen"
						href="tel:0701551078">
						070-155 10 78
					</a>
				</li>
				<li className="contact__item">
					<span className="contact__label">Email</span>
					<a
						className="contact__link"
						aria-label="Maila till oss på Harpaviljongen"
						href="mailto:info@harpaviljongen.com">
						info@harpaviljongen.com
					</a>
				</li>
				<li className="contact__item">
					<span className="contact__label">Adress</span>
					<a
						className="contact__link"
						aria-label="Länk till google maps för att hitta till Harpaviljongen"
						target="_blank"
						rel="noopener noreferrer"
						href="https://maps.app.goo.gl/S3mPSRHvyqAbTYzUA">
						Södra Fiskartorpsvägen 29
						<br />
						114 33 Stockholm
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Contact;

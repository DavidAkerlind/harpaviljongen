import './footerSection.css';
import OpeningHours from '../OpeningHours/OpeningHours';
import Contact from '../Contact/Contact';
import FollowUs from '../FollowUs/FollowUs';
import Map from '../Map/Map';

function FooterSection() {
	return (
		<footer className="footer-section">
			<FollowUs />

			<div className="footer-section__body">
				<div className="footer-section__info">
					<OpeningHours type="small" />
					<Contact />
				</div>

				<div className="footer-section__map">
					<Map />
				</div>
			</div>

			<p className="footer-section__copyright">
				Copyright © 2026 Harpaviljongen AB
			</p>
		</footer>
	);
}

export default FooterSection;

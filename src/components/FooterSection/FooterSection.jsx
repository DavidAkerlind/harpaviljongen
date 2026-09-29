import './footerSection.css';
import OpeningHours from '../OpeningHours/OpeningHours';
import Contact from '../Contact/Contact';
import FollowUs from '../FollowUs/FollowUs';
import Map from '../Map/Map';
import Newsletter from '../Newsletter/Newsletter';
import { useSiteConfig } from '../../API/useSiteConfig';

function FooterSection() {
	// Hidden only when the API says the signup isn't connected to Get a Newsletter yet
	const { newsletter } = useSiteConfig();

	return (
		<footer className="footer-section">
			<FollowUs />

			{/* On a computer the newsletter is last, under the hours and the map; on a phone
			    it's between the hours and the map (footerSection.css) */}
			<div className="footer-section__body">
				<div className="footer-section__info">
					<OpeningHours type="small" />
					<Contact />
				</div>

				{newsletter !== false && (
					<div className="footer-section__newsletter">
						<Newsletter />
					</div>
				)}

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

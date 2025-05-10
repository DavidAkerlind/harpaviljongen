import './openingHours.css';
import '../Menu/menu.css';
import { openingHours } from '../../data/data.js';
import BackgroundImage from '../BackgroundImage/BackgroundImage.jsx';
function OpeningHours({ img }) {
	return (
		<section id="openingHours" className="opening-hours">
			<h2 className="opening-hours__title">ÖPPETTIDER</h2>
			<ul className="opening-hours__day-list">
				{openingHours.map(({ day, hours }) => (
					<li className="opening-hours__day" key={day}>
						<span>{day}</span>
						<span>{hours}</span>
					</li>
				))}
			</ul>
			{img && (
				<BackgroundImage
					img={img}
					altText={`background image opening-hours`}
					type="opening-hours"
				/>
			)}
		</section>
	);
}

export default OpeningHours;

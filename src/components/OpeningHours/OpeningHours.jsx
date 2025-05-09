import './openingHours.css';
import openingHours from '../../data/openingHours';
function OpeningHours() {
	return (
		<section className="opening-hours">
			<h2 className="opening-hours__title">ÖPPETTIDER</h2>
			<ul>
				{openingHours.map(({ day, hours }) => (
					<li className="opening-hours__day" key={day}>
						<span>{day}</span>
						<span>{hours}</span>
					</li>
				))}
			</ul>
		</section>
	);
}

export default OpeningHours;

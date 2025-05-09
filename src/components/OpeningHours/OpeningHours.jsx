import './openingHours.css';
import '../Menu/menu.css';
import openingHours from '../../data/openingHours';
function OpeningHours({ img }) {
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
			{img && (
				<figure className={`menu__background-img opening`}>
					<img src={img} alt={img} />
				</figure>
			)}
		</section>
	);
}

export default OpeningHours;

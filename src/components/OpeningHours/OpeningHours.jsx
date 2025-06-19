import './openingHours.css';
import '../Menu/menu.css';
import BackgroundImage from '../BackgroundImage/BackgroundImage.jsx';
import { fetchOpeningHours } from '../../API/fetchOpeningHours.js';
import { devfetchOpeningHours } from '../../API/devfetchOpeningHours.js';
import MenuSkeleton from '../Skeleton/Skeleton.jsx';

function OpeningHours({ img }) {
	const { fetchedHours, loading, error } = fetchOpeningHours();

	if (loading) return <MenuSkeleton />;
	if (error) return <MenuSkeleton />;

	return (
		<section id="openingHours" className="opening-hours-section">
			<h2 className="opening-hours__title">ÖPPETTIDER</h2>
			<ul className="opening-hours__day-list">
				{fetchedHours.map(({ day, hours }) => (
					<li className="opening-hours__day" key={day}>
						<span className="opening-hours__day-name">{day}</span>
						<span>
							{hours.from === '' && hours.to === ''
								? 'Stängt'
								: `${hours.from}-${hours.to}`}
						</span>
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

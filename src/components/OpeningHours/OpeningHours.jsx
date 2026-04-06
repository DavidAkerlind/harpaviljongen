import './openingHours.css';
import '../Menu/menu.css';
import BackgroundImage from '../BackgroundImage/BackgroundImage.jsx';
import { fetchOpeningHours } from '../../API/fetchOpeningHours.js';
import { devfetchOpeningHours } from '../../API/devfetchOpeningHours.js';
import MenuSkeleton from '../Skeleton/Skeleton.jsx';

const DAY_ORDER = [
	'Måndag',
	'Tisdag',
	'Onsdag',
	'Torsdag',
	'Fredag',
	'Lördag',
	'Söndag',
];

function OpeningHours({ img, type }) {
	const { fetchedHours, loading, error } = fetchOpeningHours();

	const sortedHours = [...(fetchedHours ?? [])].sort(
		(a, b) => DAY_ORDER.indexOf(a.day) - DAY_ORDER.indexOf(b.day),
	);

	if (loading) return <MenuSkeleton />;
	if (error) return <MenuSkeleton />;

	return (
		<section
			id="openingHours"
			className={`opening-hours-section${
				type === 'small' ? ' opening-hours-section--small' : ''
			}`}>
			<h2 className="opening-hours__title">ÖPPETTIDER</h2>
			<article>
				<h3>Stängt för säsongen</h3> <br />
			</article>
			<ul className="opening-hours__day-list">
				{sortedHours.map(({ day, hours }) => (
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

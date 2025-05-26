import './eventCard.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import eventImg from '../../assets/pictures/event.png';
import dj2Img from '../../assets//pictures/dj2.jpg';
import wineImg from '../../assets/pictures/wine-tasting2.jpg';
import privateImg from '../../assets/pictures/private.png';
function EventCard({ event }) {
	const date = new Date(event.date);
	const month = date
		.toLocaleDateString('sv-SW', { month: 'short' })
		.toUpperCase();
	const day = date.getDate();

	// Välj bild beroende på event.type
	let imageSrc = eventImg;
	if (event.type === 'dj') imageSrc = dj2Img;
	else if (event.type === 'wine') imageSrc = wineImg;
	else if (event.type === 'private') imageSrc = privateImg;

	return (
		<Link
			to={`/event/${event.eventId}`}
			className="event-card event-card--poster">
			<div className="event-card__vertical event-card__vertical--left">
				HARPAVILJONGEN
			</div>
			<div className="event-card__vertical event-card__vertical--right">
				SOMMAR {date.getFullYear()}
			</div>
			<div className="event-card__header">
				<h2 className="event-card__title">
					{event.title.toUpperCase()}
				</h2>
			</div>
			<div className="event-card__image-container">
				<img
					src={imageSrc}
					alt={event.title.toUpperCase()}
					className="event-card__image"
				/>
			</div>
			<div className="event-card__desc">
				{event.shortDescription.toUpperCase()}
			</div>
			<div className="event-card__date">
				{month} {day} | {event.startTime}–{event.endTime.toUpperCase()}
			</div>
			<p className="event-card__read-more">
				LÄS MER
				<FontAwesomeIcon icon={faArrowRightLong} />
			</p>
		</Link>
	);
}

export default EventCard;

// import './eventCard.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
// import eventImg from '../../assets/pictures/event.png';
// import { Link } from 'react-router-dom';

// function EventCard({ event }) {
// 	const date = new Date(event.date);
// 	const month = date
// 		.toLocaleDateString('sv-SW', { month: 'short' })
// 		.toUpperCase();
// 	const day = date.getDate();

// 	return (
// 		<Link to={`/event/${event.eventId}`} className="event-card">
// 			<img src={eventImg} alt={event.title} className="event-img" />
// 			<section className="event-date">
// 				<span className="event-month">{month}</span>
// 				<span className="event-day">{day}</span>
// 			</section>
// 			<article className="event-info">
// 				<h3>{event.title}</h3>
// 				<p className="event-time">
// 					{event.startTime} – {event.endTime}
// 				</p>
// 				<p>{event.shortDescription}</p>
// 				<p className="event-card__read-more">
// 					Läs mer <FontAwesomeIcon icon={faArrowRightLong} />
// 				</p>
// 			</article>
// 		</Link>
// 	);
// }

// export default EventCard;

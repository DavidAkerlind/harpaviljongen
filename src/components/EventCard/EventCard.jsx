import './eventCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import eventImg from '../../assets/pictures/event.png';

function EventCard({ event }) {
	const date = new Date(event.date);
	const month = date
		.toLocaleDateString('en-US', { month: 'short' })
		.toUpperCase();
	const day = date.getDate();

	return (
		<a href={`/event/${event.eventId}`} className="event-card">
			<img src={eventImg} alt={event.title} className="event-img" />
			<section className="event-date">
				<span className="event-month">{month}</span>
				<span className="event-day">{day}</span>
			</section>
			<article className="event-info">
				<h3>{event.title}</h3>
				<p className="event-time">
					{event.startTime} – {event.endTime}
				</p>
				<p>{event.shortDescription}</p>
				<p className="event-card__read-more">
					Läs mer <FontAwesomeIcon icon={faArrowRightLong} />
				</p>
			</article>
		</a>
	);
}

export default EventCard;

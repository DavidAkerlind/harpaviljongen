import './eventCard.css';

function EventCard({ event }) {
	const date = new Date(event.date);
	const month = date
		.toLocaleDateString('en-US', { month: 'short' })
		.toUpperCase();
	const day = date.getDate();

	return (
		<div className="event-card">
			<img src={event.image} alt={event.title} className="event-img" />
			<div className="event-date">
				<span className="event-month">{month}</span>
				<span className="event-day">{day}</span>
			</div>
			<div className="event-info">
				<h3>{event.title}</h3>
				<p className="event-time">
					{event.startTime} – {event.endTime}
				</p>
				<p>{event.description}</p>
			</div>
		</div>
	);
}

export default EventCard;

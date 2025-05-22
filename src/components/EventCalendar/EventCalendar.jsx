import React from 'react';
import { events } from '../../testData/mockEvents';
import EventCard from '../EventCard/EventCard';
import './eventCalendar.css';

function EventCalendar() {
	const today = new Date();

	const upcomingEvents = events
		.filter((e) => new Date(e.date) >= today)
		.sort((a, b) => new Date(a.date) - new Date(b.date));

	return (
		<section className="event-calendar">
			<h2>Evenemang</h2>
			{upcomingEvents.length > 0 ? (
				<ul className="event-list">
					{upcomingEvents.map((event) => (
						<EventCard event={event} />
					))}
				</ul>
			) : (
				<p>Inga kommande evenemang.</p>
			)}
		</section>
	);
}

export default EventCalendar;

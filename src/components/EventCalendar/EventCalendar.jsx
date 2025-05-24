import React from 'react';
import { events } from '../../testData/mockEvents';
import EventCard from '../EventCard/EventCard';
import { fetchAllEvents } from '../../API/fetchAllEvents.js';
import MenuSkeleton from '../Skeleton/Skeleton.jsx';

import './eventCalendar.css';

function EventCalendar() {
	const { fetchedEvents, loading, error } = fetchAllEvents();
	const today = new Date();
	console.log(fetchedEvents);

	if (loading) return <MenuSkeleton />;
	if (error) return <p>Error loading menu: {error.message}</p>;

	return (
		<section className="event-calendar">
			<h2 className="section__title">EVENEMANG</h2>
			{fetchedEvents.length > 0 ? (
				<ul className="event-list">
					{fetchedEvents.map((event, index) => (
						<EventCard key={index} event={event} />
					))}
				</ul>
			) : (
				<p>Inga kommande evenemang.</p>
			)}
		</section>
	);
}

export default EventCalendar;

import React from 'react';
import { events } from '../../testData/mockEvents';
import EventCard from '../EventCard/EventCard';
import { fetchAllEvents } from '../../API/fetchAllEvents.js';
import MenuSkeleton from '../Skeleton/Skeleton.jsx';

import './eventCalendar.css';
import Button from '../Button/Button.jsx';

function EventCalendar() {
	const { fetchedEvents, loading, error } = fetchAllEvents();
	console.log(fetchedEvents);

	if (loading) return <MenuSkeleton />;
	if (error) return <p>Error loading menu: {error.message}</p>;

	return (
		<section id="events" className="event-calendar">
			<h2 className="section__title">EVENEMANG</h2>
			<h3 className="event-calendar__subtitle">
				På harpaviljongen kör vi event hela sommaren! Dj-spelingar,
				vin-provningar, och mycket mer. Kom och häng i våran lilla oas i
				sommar
			</h3>
			{fetchedEvents.length > 0 ? (
				<ul className="event-list">
					{fetchedEvents.map((event, index) => (
						<EventCard key={index} event={event} />
					))}
				</ul>
			) : (
				<p>Inga kommande evenemang</p>
			)}
			<br />
			<Button text="ALLA EVENEMANG" link={`/events}`} />
		</section>
	);
}

export default EventCalendar;

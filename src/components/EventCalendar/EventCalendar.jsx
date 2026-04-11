import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faClock,
	faLocationDot,
	faArrowRight,
	faChevronLeft,
	faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { fetchAllEvents } from '../../API/fetchAllEvents.js';
import MenuSkeleton from '../Skeleton/Skeleton.jsx';
import FadeIn from '../FadeIn/FadeIn.jsx';

import eventImg from '../../assets/pictures/event.png';
import event02 from '../../assets/pictures/images/event02-08-flat.PNG';
import wineImg from '../../assets/pictures/wine-tasting2.jpg';
import privateImg from '../../assets/pictures/private.png';
import bouleImg from '../../assets/pictures/images/Harpaviljongen-open-2025.jpg';

import './eventCalendar.css';

const MONTHS_SV = [
	'JANUARI',
	'FEBRUARI',
	'MARS',
	'APRIL',
	'MAJ',
	'JUNI',
	'JULI',
	'AUGUSTI',
	'SEPTEMBER',
	'OKTOBER',
	'NOVEMBER',
	'DECEMBER',
];
const MONTHS_SV_LOWER = [
	'januari',
	'februari',
	'mars',
	'april',
	'maj',
	'juni',
	'juli',
	'augusti',
	'september',
	'oktober',
	'november',
	'december',
];
const WEEKDAYS_SHORT = ['MÅ', 'TI', 'ON', 'TO', 'FR', 'LÖ', 'SÖ'];

function getCategory(type) {
	switch (type) {
		case 'boule':
			return 'SPORT & LEK';
		case 'wine':
			return 'MAT & DRYCK';
		case 'dj':
			return 'MUSIK & DANS';
		case 'private':
			return 'PRIVAT EVENT';
		default:
			return 'EVENEMANG';
	}
}

function getEventLocation(event) {
	if (event.location) return event.location;
	switch (event.type) {
		case 'boule':
			return 'Trädgården';
		case 'wine':
			return 'Vinkällaren';
		default:
			return 'Harpaviljongen';
	}
}

function getEventImage(type) {
	if (type === 'dj') return event02;
	if (type === 'wine') return wineImg;
	if (type === 'private') return privateImg;
	if (type === 'boule') return bouleImg;
	return eventImg;
}

function EventCalendar() {
	const { fetchedEvents, loading, error } = fetchAllEvents();
	const today = new Date();

	// Fixed season tabs: April (3) through September (8)
	const SEASON_YEAR =
		today.getMonth() >= 3 && today.getMonth() <= 8
			? today.getFullYear()
			: today.getMonth() < 3
				? today.getFullYear()
				: today.getFullYear() + 1;

	const seasonTabs = useMemo(() => {
		return [3, 4, 5, 6, 7, 8].map((month) => ({
			key: `${SEASON_YEAR}-${month}`,
			year: SEASON_YEAR,
			month,
		}));
	}, [SEASON_YEAR]);

	const defaultTab = useMemo(() => {
		const todayKey = `${today.getFullYear()}-${today.getMonth()}`;
		return seasonTabs.find((m) => m.key === todayKey) || seasonTabs[0];
	}, [seasonTabs]);

	const [selectedTabKey, setSelectedTabKey] = useState(null);
	const [calDisplay, setCalDisplay] = useState(null);

	const activeTab = selectedTabKey
		? seasonTabs.find((m) => m.key === selectedTabKey) || defaultTab
		: defaultTab;

	const calYear = calDisplay
		? calDisplay.year
		: activeTab
			? activeTab.year
			: today.getFullYear();
	const calMonthNum = calDisplay
		? calDisplay.month
		: activeTab
			? activeTab.month
			: today.getMonth();

	const eventDateSet = useMemo(() => {
		const s = new Set();
		if (fetchedEvents) {
			fetchedEvents.forEach((event) => {
				const d = new Date(event.date);
				s.add(`${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`);
			});
		}
		return s;
	}, [fetchedEvents]);

	const monthEvents = useMemo(() => {
		if (!fetchedEvents || !activeTab) return [];
		return fetchedEvents
			.filter((event) => {
				const d = new Date(event.date);
				return (
					d.getFullYear() === activeTab.year &&
					d.getMonth() === activeTab.month
				);
			})
			.sort((a, b) => new Date(a.date) - new Date(b.date));
	}, [fetchedEvents, activeTab]);

	const groupedEvents = useMemo(() => {
		const groups = [];
		monthEvents.forEach((event) => {
			const d = new Date(event.date);
			const dayNum = d.getDate();
			const last = groups[groups.length - 1];
			if (!last || last.dayNum !== dayNum) {
				groups.push({ dayNum, date: d, events: [event] });
			} else {
				last.events.push(event);
			}
		});
		return groups;
	}, [monthEvents]);

	const calendarCells = useMemo(() => {
		const firstDay = new Date(calYear, calMonthNum, 1);
		const daysInMonth = new Date(calYear, calMonthNum + 1, 0).getDate();
		const leadingBlanks = (firstDay.getDay() + 6) % 7;
		const cells = Array(leadingBlanks).fill(null);
		for (let d = 1; d <= daysInMonth; d++) cells.push(d);
		return cells;
	}, [calYear, calMonthNum]);

	const handleTabClick = (tabKey) => {
		setSelectedTabKey(tabKey);
		const tab = seasonTabs.find((m) => m.key === tabKey);
		if (tab) setCalDisplay({ year: tab.year, month: tab.month });
	};

	const handleCalPrev = () => {
		let m = calMonthNum - 1;
		let y = calYear;
		if (m < 0) {
			m = 11;
			y -= 1;
		}
		setCalDisplay({ year: y, month: m });
		const tabKey = `${y}-${m}`;
		if (seasonTabs.some((t) => t.key === tabKey)) {
			setSelectedTabKey(tabKey);
		}
	};

	const handleCalNext = () => {
		let m = calMonthNum + 1;
		let y = calYear;
		if (m > 11) {
			m = 0;
			y += 1;
		}
		setCalDisplay({ year: y, month: m });
		const tabKey = `${y}-${m}`;
		if (seasonTabs.some((t) => t.key === tabKey)) {
			setSelectedTabKey(tabKey);
		}
	};

	const handleCalDayClick = (day) => {
		if (!day) return;
		const key = `${calYear}-${calMonthNum}-${day}`;
		if (eventDateSet.has(key)) {
			const tabKey = `${calYear}-${calMonthNum}`;
			setSelectedTabKey(tabKey);
			setTimeout(() => {
				const el = document.getElementById(`event-day-${day}`);
				if (el)
					el.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}, 50);
		}
	};

	if (loading) return <MenuSkeleton />;

	return (
		<section id="events" className="event-calendar">
			<FadeIn direction="none">
				<nav className="event-calendar__tabs">
					{seasonTabs.map(({ key, month }) => (
						<button
							key={key}
							className={`event-calendar__tab${activeTab && activeTab.key === key ? ' event-calendar__tab--active' : ''}`}
							onClick={() => handleTabClick(key)}>
							{MONTHS_SV[month]}
						</button>
					))}
				</nav>
			</FadeIn>

			<FadeIn direction="none" delay={100}>
				<div className="event-calendar__body">
					<aside className="event-calendar__cal-widget">
						<div className="event-calendar__cal-nav-row">
							<button
								className="event-calendar__cal-arrow"
								onClick={handleCalPrev}
								aria-label="Föregående månad">
								<FontAwesomeIcon icon={faChevronLeft} />
							</button>
							<span className="event-calendar__cal-month-label">
								{MONTHS_SV[calMonthNum]} {calYear}
							</span>
							<button
								className="event-calendar__cal-arrow"
								onClick={handleCalNext}
								aria-label="Nästa månad">
								<FontAwesomeIcon icon={faChevronRight} />
							</button>
						</div>

						<div className="event-calendar__cal-grid">
							{WEEKDAYS_SHORT.map((wd) => (
								<span
									key={wd}
									className="event-calendar__cal-weekday">
									{wd}
								</span>
							))}
							{calendarCells.map((day, i) => {
								const isToday =
									day !== null &&
									today.getDate() === day &&
									today.getMonth() === calMonthNum &&
									today.getFullYear() === calYear;
								const hasEvent =
									day !== null &&
									eventDateSet.has(
										`${calYear}-${calMonthNum}-${day}`,
									);
								return (
									<div
										key={i}
										className={[
											'event-calendar__cal-day',
											day === null
												? 'event-calendar__cal-day--empty'
												: '',
											isToday
												? 'event-calendar__cal-day--today'
												: '',
											hasEvent
												? 'event-calendar__cal-day--has-event'
												: '',
										]
											.join(' ')
											.trim()}
										onClick={() => handleCalDayClick(day)}>
										{day}
									</div>
								);
							})}
						</div>

						<p className="event-calendar__cal-count">
							{
								fetchedEvents.filter((e) => {
									const d = new Date(e.date);
									return (
										d.getFullYear() === calYear &&
										d.getMonth() === calMonthNum
									);
								}).length
							}{' '}
							evenemang i {MONTHS_SV_LOWER[calMonthNum]}
						</p>
					</aside>

					<div className="event-calendar__list">
						{groupedEvents.length === 0 ? (
							<p className="event-calendar__empty">
								Inga evenemang denna månad
							</p>
						) : (
							groupedEvents.map(({ dayNum, date, events }) => {
								const weekday = date
									.toLocaleDateString('sv-SE', {
										weekday: 'long',
									})
									.toUpperCase();
								const monthName = MONTHS_SV[date.getMonth()];
								return (
									<div
										key={dayNum}
										id={`event-day-${dayNum}`}
										className="event-calendar__day-group">
										<div className="event-calendar__day-header">
											<span className="event-calendar__day-badge">
												{dayNum}
											</span>
											<span className="event-calendar__day-label">
												{weekday} {dayNum} {monthName}
											</span>
										</div>
										{events.map((event, idx) => (
											<FadeIn
												key={event.eventId || idx}
												direction="none"
												delay={idx * 60}>
												<Link
													to={`/event/${event.eventId}`}
													className="event-calendar__card">
													<div className="event-calendar__card-img-wrap">
														<img
															src={getEventImage(
																event.type,
															)}
															alt={event.title}
															className="event-calendar__card-img"
														/>
													</div>
													<div className="event-calendar__card-info">
														<span className="event-calendar__card-category">
															{getCategory(
																event.type,
															)}
														</span>
														<h3 className="event-calendar__card-title">
															{event.title}
														</h3>
														<p className="event-calendar__card-desc">
															{
																event.shortDescription
															}
														</p>
														<div className="event-calendar__card-footer">
															<span className="event-calendar__card-time">
																<FontAwesomeIcon
																	icon={
																		faClock
																	}
																/>
																{
																	event.startTime
																}{' '}
																–{' '}
																{event.endTime}
															</span>
															<span className="event-calendar__card-read-more">
																LÄS MER{' '}
																<FontAwesomeIcon
																	icon={
																		faArrowRight
																	}
																/>
															</span>
														</div>
														{event.price && (
															<span className="event-calendar__card-price">
																{event.price}
															</span>
														)}
													</div>
												</Link>
											</FadeIn>
										))}
									</div>
								);
							})
						)}
					</div>
				</div>
			</FadeIn>
		</section>
	);
}

export default EventCalendar;

import React from 'react';
import './eventsPage.css';
import NavBar from '../../components/NavBar/NavBar';
import PageHeader from '../../components/PageHeader/PageHeader';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import FadeIn from '../../components/FadeIn/FadeIn';

function EventsPage() {
	return (
		<main className="page page-events">
			<NavBar />
			<PageHeader text="EVENEMANG" />

			<FadeIn>
				<section className="events-coming__content">
					<h2 className="events-coming__title">
						Snart händer det saker här!
					</h2>

					<Button text="← TILLBAKA" link="/" />
				</section>
			</FadeIn>

			<FadeIn delay={150}>
				<Footer />
			</FadeIn>
		</main>
	);
}

export default EventsPage;

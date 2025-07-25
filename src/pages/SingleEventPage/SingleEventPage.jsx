import { useParams } from 'react-router-dom';
import { fetchEventById } from '../../API/fetchEventById';
import NavBar from '../../components/NavBar/NavBar';
import PageHeader from '../../components/PageHeader/PageHeader';
import Button from '../../components/Button/Button';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import hareLogo from '../../assets/logo/hare-logo-blue.svg';

import './singleEventPage.css';

import MenuSkeleton from '../../components/Skeleton/Skeleton';

import event02 from '../../assets/pictures/images/event02-08-flat-big.PNG';
import wineImg from '../../assets/pictures/ProImages/thumbnail_Restaurangporträtt_Harpaviljongen_IG_A-16.jpg';
import privateImg from '../../assets/pictures/private.png';
import eventImg from '../../assets/pictures/event.png';
import Footer from '../../components/Footer/Footer';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
function SingleEventPage() {
	const location = useLocation();

	useEffect(() => {
		if (location.hash) {
			const id = location.hash.replace('#', '');
			const el = document.getElementById(id);

			if (el) {
				el.scrollIntoView({ behavior: 'smooth' });
			}
		}
	}, [location]);
	const { eventId } = useParams();
	const { fetchedEvent, loading, error } = fetchEventById(eventId);

	// Välj bild beroende på event.type
	let imageSrc = eventImg;
	if (fetchedEvent.type === 'dj') imageSrc = event02;
	else if (fetchedEvent.type === 'wine') imageSrc = wineImg;
	else if (fetchedEvent.type === 'private') imageSrc = privateImg;

	if (loading) {
		return (
			<section className="page page-single-event">
				<NavBar />
				<MenuSkeleton />
			</section>
		);
	}

	if (error || !fetchedEvent) {
		return (
			<section className="page page-single-event">
				<NavBar />
				<PageHeader text="Kunde inte ladda evenemang" />
				<p className="single-event__error">
					Något gick fel. Försök igen senare.
				</p>
			</section>
		);
	}

	const date = new Date(fetchedEvent.date);
	const month = date.toLocaleDateString('sv-SE', { month: 'long' });
	const day = date.getDate();
	const weekday = date.toLocaleDateString('sv-SE', { weekday: 'long' }); // Lägg till denna

	return (
		<main className="page page-single-event">
			<NavBar />
			{/* <PageHeader text={fetchedEvent.title} /> */}
			<article className="single-event">
				<section className="single-event__hero">
					<img
						src={imageSrc}
						alt={fetchedEvent.title}
						className="single-event__hero-img"
					/>
					<div className="single-event__hero-overlay" />
					<div className="single-event__hero-content">
						<h1 className="single-event__hero-title">
							{fetchedEvent.title.toUpperCase()}
						</h1>
						<p className="single-event__hero-shortdesc">
							{fetchedEvent.shortDescription}
						</p>
					</div>
				</section>
				<section className="single-event__details-row">
					<div className="single-event__detail">
						<span className="single-event__detail-label">
							Datum
						</span>
						<span className="single-event__detail-value">
							{weekday} {day} {month}
						</span>
					</div>
					<div className="single-event__detail">
						<span className="single-event__detail-label">Tid</span>
						<span className="single-event__detail-value">
							{fetchedEvent.startTime} – {fetchedEvent.endTime}
						</span>
					</div>
					<div className="single-event__detail">
						<span className="single-event__detail-label">
							Plats
						</span>
						<span className="single-event__detail-value">
							Harpaviljongen
						</span>
					</div>
					{fetchedEvent.type === 'dj' && (
						<div className="single-event__detail single-event__detail--button">
							<Button
								text="BOKA BORDSPAKETET"
								link="mailto:info@harpaviljongen.com?subject=Boka%20event%20Kräftvinylskiva"
							/>
						</div>
					)}

					{hareLogo && (
						<BackgroundImage
							img={hareLogo}
							altText={`background image event`}
							type="event"
						/>
					)}
				</section>
				<section className="single-event__main-content">
					<div className="single-event__desc">
						<p className="single-event__desc-lead">
							{/* {fetchedEvent.longDescription} */}
							LÖRDAG 2 AUGUSTI drar vi igång kräftsäsongen med
							stil – och med snurr! <br /> <br /> DJ Aspen sätter
							första vinylen kl. 13:00, och vi fyller dagen med
							kräftor, vin, nubbe och skivor i solen. <br />{' '}
							<br /> Paket för 2 personer – 1499 kr <br />{' '}
							Innehåller:
							<ul className="single-event__list">
								<li>1 flaska vin</li>
								<li>2 snaps</li>
								<li>Kräftor med alla klassiska tillbehör</li>
							</ul>
							<br />
							Platserna är begränsade och kommer garanterat ta
							slut – först till kvarn gäller.
							<br /> <br />
							Boka via telefon eller mejl:{' '}
							<a href="tel:076-777 16 67">
								<u>076-777 16 67</u>
							</a>{' '}
							/{' '}
							<a href="mailto:jonathan@harpaviljongen.com?subject=Boka%20event%20Kräftvinylskiva">
								<u>jonathan@harpaviljongen.com</u>
							</a>{' '}
						</p>
					</div>
					<aside className="single-event__aside">
						<h2 className="single-event__aside-title">
							Mer information
						</h2>
						<ul className="single-event__aside-list">
							<li>
								<strong>När</strong> {day} {month}
							</li>
							<li>
								<strong>Tid</strong> {fetchedEvent.startTime} –{' '}
								{fetchedEvent.endTime}
							</li>
							<li>
								<strong>Var</strong> Harpaviljongen
							</li>
							<li>
								<strong>Mat & dryck för två</strong> 1499:-
							</li>
							<li>
								<strong>Boka</strong>{' '}
								<a href="mailto:jonathan@harpaviljongen.com?subject=Boka%20event%20Kräftvinylskiva">
									<u>mejla</u>
								</a>{' '}
								eller{' '}
								<a href="tel:076-777 16 67">
									<u>ring</u>
								</a>
							</li>
						</ul>
					</aside>
				</section>
			</article>
			<Button text="TILL TOPPEN" link={'#top'} />
			<Footer />
		</main>
	);
}

export default SingleEventPage;

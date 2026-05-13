import { useParams } from 'react-router-dom';
import { fetchEventById } from '../../API/fetchEventById';
import NavBar from '../../components/NavBar/NavBar';
import PageHeader from '../../components/PageHeader/PageHeader';
import Button from '../../components/Button/Button';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import hareLogo from '../../assets/logo/hare-logo-green.svg';

import './singleEventPage.css';

import MenuSkeleton from '../../components/Skeleton/Skeleton';

import event02 from '../../assets/pictures/images/event02-08-flat-big.png';
import wineImg from '../../assets/pictures/ProImages/thumbnail_Restaurangporträtt_Harpaviljongen_IG_A-16.jpg';
import privateImg from '../../assets/pictures/private.png';
import eventImg from '../../assets/pictures/event.png';
import bouleImg from '../../assets/pictures/images/Harpaviljongen-open-2025.jpg';
import Footer from '../../components/Footer/Footer';
import FadeIn from '../../components/FadeIn/FadeIn';
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

	useEffect(() => {
		if (fetchedEvent?.title) {
			document.title = `${fetchedEvent.title} – Harpaviljongen`;
		}
	}, [fetchedEvent]);

	let longDesc = fetchedEvent.longDesc;

	// Välj bild beroende på event.type
	let imageSrc = eventImg;
	if (fetchedEvent.type === 'dj') imageSrc = event02;
	else if (fetchedEvent.type === 'wine') imageSrc = wineImg;
	else if (fetchedEvent.type === 'private') imageSrc = privateImg;
	else if (fetchedEvent.type === 'boule') imageSrc = bouleImg;

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
			<FadeIn>
				<article className="single-event">
					<FadeIn>
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
							</div>
						</section>
					</FadeIn>
					<section className="single-event__details-row">
						<FadeIn delay={200}>
							<div className="single-event__detail">
								<span className="single-event__detail-label">
									Datum
								</span>

								<span className="single-event__detail-value">
									{weekday} {day} {month}
								</span>
							</div>
						</FadeIn>
						<FadeIn delay={300}>
							<div className="single-event__detail">
								<span className="single-event__detail-label">
									Tid
								</span>
								<span className="single-event__detail-value">
									{fetchedEvent.startTime} –{' '}
									{fetchedEvent.endTime}
								</span>
							</div>
						</FadeIn>
						<FadeIn delay={400}>
							<div className="single-event__detail">
								<span className="single-event__detail-label">
									Plats
								</span>
								<span className="single-event__detail-value">
									Harpaviljongen
								</span>
							</div>
						</FadeIn>
						{fetchedEvent.type === 'boule' && (
							<FadeIn delay={500}>
								<div className="single-event__detail single-event__detail--button">
									<Button
										text="ANMÄL DIG NU 200kr"
										link="https://docs.google.com/forms/d/e/1FAIpQLSedV-FACztwjMdGLFk4gR8mxpaFGXKnWM1rsl6PksdXHkuAVw/viewform?fbclid=PAZXh0bgNhZW0CMTEAAadVPjExdMHUVP2R4wgWdMCzDoiospfQ4XoNMmikuVaPHpOfNEGFyyEWt6is-A_aem_zOiulzRsCSf8s5sFg_U87A"
									/>
								</div>
							</FadeIn>
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
						<FadeIn delay={300}>
							<div className="single-event__desc">
								<p className="single-event__desc-lead">
									{fetchedEvent.type === 'private' ? (
										<>
											Välkommen att inviga säsongen hos
											oss!
											<br />
											<br />
											Solen blir starkare, dagarna blir
											längre och det är på Café
											Harpaviljongen ni vill vara.
											<br /> <br />
											Vi serverar från en{' '}
											<strong>
												ny meny och med nya viner
											</strong>
											, i en grönskande miljö med en
											stämning som sätter tonen för
											sommaren.
											<br />
											<br />
											Under kvällen spelar{' '}
											<strong>DJ ASPEN! </strong>
											<br />
											<br />
											<strong>
												Bordsbokningar accepteras innom
												kort!
											</strong>
											<br />
											<br />
											Vi syns där!
										</>
									) : (
										fetchedEvent.longDescription
									)}
									{/* I år går
								startskottet för{' '}
								<strong>Harpaviljongen Open</strong> – vår egen
								bouletävling <br /> Det är första upplagan av
								vad vi vill ska bli en återkommande tradition,
								där sensommaren alltid får sitt avstamp i
								spelglädje, rosé i glasen och gemenskap runt
								boulebanan 
								<br />
								<br /> <strong>Anmälan</strong> inklusive 1 glas
								rosé & 1 pastis– 200 kr <br />
								<br />
								Platserna är begränsade och kommer garanterat ta
								slut – först till kvarn gäller.
								<br /> <br />
								Anmäl dig via formuläret:{' '}
								<a href="https://docs.google.com/forms/d/e/1FAIpQLSedV-FACztwjMdGLFk4gR8mxpaFGXKnWM1rsl6PksdXHkuAVw/viewform?fbclid=PAZXh0bgNhZW0CMTEAAadVPjExdMHUVP2R4wgWdMCzDoiospfQ4XoNMmikuVaPHpOfNEGFyyEWt6is-A_aem_zOiulzRsCSf8s5sFg_U87A">
									<u>Länk här</u>
								</a>{' '} */}
								</p>
							</div>
						</FadeIn>
						<FadeIn delay={450}>
							<aside className="single-event__aside">
								<h2 className="single-event__aside-title">
									Mer information
								</h2>
								<ul className="single-event__aside-list">
									<li>
										<strong>När</strong> {day} {month}
									</li>
									<li>
										<strong>Tid</strong>{' '}
										{fetchedEvent.startTime} –{' '}
										{fetchedEvent.endTime}
									</li>
									<li>
										<strong>Vad</strong> DJ Aspen, nya
										viner, ny meny
									</li>
									{/* <li>
									<strong>Anmälan</strong> 200:- (inkl 1 glas
									rosé & 1 pastis)
								</li> */}
									{/* <li>
									<strong>Anmäl dig</strong>{' '}
									<a href="https://docs.google.com/forms/d/e/1FAIpQLSedV-FACztwjMdGLFk4gR8mxpaFGXKnWM1rsl6PksdXHkuAVw/viewform?fbclid=PAZXh0bgNhZW0CMTEAAadVPjExdMHUVP2R4wgWdMCzDoiospfQ4XoNMmikuVaPHpOfNEGFyyEWt6is-A_aem_zOiulzRsCSf8s5sFg_U87A">
										<u>här</u>
									</a>
								</li> */}
								</ul>
							</aside>
						</FadeIn>
					</section>
				</article>
			</FadeIn>
			<FadeIn delay={600}>
				<Button text="TILL TOPPEN" link={'#top'} />
			</FadeIn>
			<FadeIn delay={150}>
				<Footer />
			</FadeIn>
		</main>
	);
}

export default SingleEventPage;

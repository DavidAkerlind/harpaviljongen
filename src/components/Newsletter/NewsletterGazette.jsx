import { useEffect, useRef, useState } from 'react';
import './newsletterGazette.css';
import { openNewsletter } from './getanewsletter';
import { seasonNow } from './variant';
import hare from '../../assets/logo/hare-logo-green.svg';
import cutlery from '../../assets/illustrations/cutlery.svg';
import wineglass from '../../assets/illustrations/wineglass-filled.svg';
import bubbles from '../../assets/illustrations/bubbelglass.svg';

const ARTICLES = [
	{ key: 'menus', icon: cutlery, title: 'NYA MENYER', text: 'Säsongens nya rätter, innan de står på bordet.' },
	{ key: 'wine', icon: wineglass, title: 'VIN', text: 'Vinprovningar och nyheter på vinlistan.' },
	{ key: 'events', icon: bubbles, title: 'EVENEMANG', text: 'DJ-kvällar, fester och säsongens öppning.' },
];
const TICKER = ['NYA MENYER', 'VINPROVNINGAR', 'DJ-KVÄLLAR', 'EVENEMANG', 'SÄSONGSÖPPNING', 'CHAMBRE SÉPARÉE'];

// Suggestion 1, "Tidningen": the newsletter as a small newspaper front page. It unfolds
// when it scrolls into view, the hare is stamped on it, and the news ticks by.
function NewsletterGazette() {
	const ref = useRef(null);
	const [open, setOpen] = useState(false);
	const { season, year } = seasonNow();

	useEffect(() => {
		const el = ref.current;
		if (!el) return undefined;
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setOpen(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.25 },
		);
		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	return (
		<section
			ref={ref}
			className={`gazette${open ? ' is-open' : ''}`}
			aria-labelledby="gazette-title">
			<div className="gazette__paper">
				<div className="gazette__stamp" aria-hidden="true">
					<span className="gazette__stamp-hare" style={{ '--hare': `url("${hare}")` }} />
				</div>

				<header className="gazette__masthead">
					<p className="gazette__kicker">HARPAVILJONGEN · ÖSTERMALM</p>
					<h2 className="gazette__title" id="gazette-title">
						NYHETSBREVET
					</h2>
					<p className="gazette__dateline">
						<span>Utgåva {season} {year}</span>
						<span aria-hidden="true">·</span>
						<span>Gratis</span>
					</p>
				</header>

				<div className="gazette__ticker" aria-hidden="true">
					<div className="gazette__ticker-track">
						{[0, 1].map((copy) => (
							<span key={copy}>
								{TICKER.map((item) => (
									<span key={item} className="gazette__ticker-item">
										{item}
									</span>
								))}
							</span>
						))}
					</div>
				</div>

				<p className="gazette__headline">Var först med nyheterna från paviljongen</p>

				<ul className="gazette__columns">
					{ARTICLES.map((article, i) => (
						<li key={article.key} className="gazette__article" style={{ '--i': i }}>
							<span
								className="gazette__icon"
								style={{ '--icon': `url("${article.icon}")` }}
								aria-hidden="true"
							/>
							<h3>{article.title}</h3>
							<p>{article.text}</p>
						</li>
					))}
				</ul>

				<div className="gazette__cta">
					<button type="button" className="button gazette__button" onClick={openNewsletter}>
						PRENUMERERA
					</button>
					<p className="gazette__fine">Ett mejl då och då. Avsluta när du vill.</p>
				</div>
			</div>
		</section>
	);
}

export default NewsletterGazette;

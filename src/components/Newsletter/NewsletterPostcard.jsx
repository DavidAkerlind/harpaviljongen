import { useEffect, useRef, useState } from 'react';
import './newsletterPostcard.css';
import { openNewsletter } from './getanewsletter';
import { seasonNow } from './variant';
import hare from '../../assets/logo/hare-logo-green.svg';

const DISMISSED_KEY = 'hp-nyhetsbrev-vykort';
const QUIET_DAYS = 30; // after "Nej tack" or "Ja", it doesn't come back for this long
const AFTER_MS = 12000; // the visitor has looked around this long…
const AFTER_SCROLL = 0.45; // …or scrolled this far down a page

const recentlyAnswered = () => {
	try {
		const at = Number(localStorage.getItem(DISMISSED_KEY));
		return at > 0 && Date.now() - at < QUIET_DAYS * 24 * 60 * 60 * 1000;
	} catch {
		return false;
	}
};
const remember = () => {
	try {
		localStorage.setItem(DISMISSED_KEY, String(Date.now()));
	} catch {
		// private mode: it may come back on the next visit
	}
};

// Suggestion 3, "Vykortet": a postcard from the pavilion that slides in once the visitor
// has looked around a while (or moves to leave the page, on a computer). It asks once:
// "Ja tack" opens the signup form, "Nej tack" or × puts it away for 30 days.
function NewsletterPostcard() {
	const [phase, setPhase] = useState('waiting'); // waiting → in → out → gone
	const { year } = seasonNow();
	const cardRef = useRef(null);
	// Shown each time while the suggestion is being looked at (?nyhetsbrev=3)
	const preview = useRef(new URLSearchParams(window.location.search).get('nyhetsbrev') === '3');

	useEffect(() => {
		if (!preview.current && recentlyAnswered()) return undefined;
		const show = () => setPhase((p) => (p === 'waiting' ? 'in' : p));
		const timer = setTimeout(show, preview.current ? 2500 : AFTER_MS);
		const onScroll = () => {
			const max = document.documentElement.scrollHeight - window.innerHeight;
			if (max > 0 && window.scrollY / max > AFTER_SCROLL) show();
		};
		// Leaving the page on a computer: the mouse goes up out of the window
		const onLeave = (e) => {
			if (!e.relatedTarget && e.clientY <= 0) show();
		};
		onScroll(); // already far down, e.g. back on a page the browser scrolled for them
		window.addEventListener('scroll', onScroll, { passive: true });
		document.addEventListener('mouseout', onLeave);
		return () => {
			clearTimeout(timer);
			window.removeEventListener('scroll', onScroll);
			document.removeEventListener('mouseout', onLeave);
		};
	}, []);

	const close = () => {
		remember();
		setPhase('out');
	};
	const accept = () => {
		remember();
		setPhase('out');
		openNewsletter();
	};

	if (phase === 'waiting' || phase === 'gone') return null;

	return (
		<aside
			ref={cardRef}
			className={`postcard postcard--${phase}`}
			aria-labelledby="postcard-title"
			onKeyDown={(e) => e.key === 'Escape' && close()}
			onAnimationEnd={(e) => e.target === cardRef.current && phase === 'out' && setPhase('gone')}>
			<button type="button" className="postcard__close" onClick={close} aria-label="Stäng">
				<span aria-hidden="true">×</span>
			</button>

			<div className="postcard__message">
				<p className="postcard__kicker">NYHETSBREV</p>
				<h2 className="postcard__title" id="postcard-title">
					Hälsningar från paviljongen!
				</h2>
				<p className="postcard__text">
					Vill du veta först om nya menyer, vinprovningar och evenemang? Vi skickar ett
					mejl då och då.
				</p>
				<div className="postcard__actions">
					<button type="button" className="button postcard__yes" onClick={accept}>
						JA TACK!
					</button>
					<button type="button" className="postcard__no" onClick={close}>
						Nej tack
					</button>
				</div>
			</div>

			<div className="postcard__address" aria-hidden="true">
				<div className="postcard__stamp">
					<span className="postcard__stamp-hare" style={{ '--hare': `url("${hare}")` }} />
				</div>
				<svg className="postcard__postmark" viewBox="0 0 120 60">
					<circle cx="30" cy="30" r="24" />
					<circle cx="30" cy="30" r="19" />
					<text x="30" y="27" textAnchor="middle">
						ÖSTERMALM
					</text>
					<text x="30" y="38" textAnchor="middle">
						{year}
					</text>
					<path d="M58 18 q8 -6 16 0 t16 0 t16 0 t16 0" />
					<path d="M58 30 q8 -6 16 0 t16 0 t16 0 t16 0" />
					<path d="M58 42 q8 -6 16 0 t16 0 t16 0 t16 0" />
				</svg>
				<p className="postcard__line">Till: dig</p>
				<p className="postcard__line postcard__line--blank" />
				<p className="postcard__line postcard__line--blank" />
			</div>
		</aside>
	);
}

export default NewsletterPostcard;

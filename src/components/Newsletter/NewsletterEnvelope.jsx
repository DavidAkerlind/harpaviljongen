import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './newsletterEnvelope.css';
import { openNewsletter } from './getanewsletter';

const CLICKED_KEY = 'hp-nyhetsbrev-klickat';
const LABEL_MS = 6000; // on phones the text shows this long, then only the envelope

const wasClicked = () => {
	try {
		return localStorage.getItem(CLICKED_KEY) === '1';
	} catch {
		return false;
	}
};

// Suggestion 2, "Brevet": an envelope in the corner on every page. It slides in once the
// visitor has scrolled past the big photo (or after a few seconds on the other pages).
// Now and then the flap opens and a letter peeks up, until the visitor has clicked it.
function NewsletterEnvelope() {
	const { pathname } = useLocation();
	const [shown, setShown] = useState(false);
	const [labelled, setLabelled] = useState(true);
	const [clicked, setClicked] = useState(wasClicked);

	useEffect(() => {
		if (shown) return undefined;
		if (pathname !== '/') {
			const timer = setTimeout(() => setShown(true), 2500);
			return () => clearTimeout(timer);
		}
		const onScroll = () => {
			if (window.scrollY > window.innerHeight * 0.6) setShown(true);
		};
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, [pathname, shown]);

	useEffect(() => {
		if (!shown) return undefined;
		const timer = setTimeout(() => setLabelled(false), LABEL_MS);
		return () => clearTimeout(timer);
	}, [shown]);

	const open = () => {
		setClicked(true);
		try {
			localStorage.setItem(CLICKED_KEY, '1');
		} catch {
			// private mode: it just peeks again next time
		}
		openNewsletter();
	};

	return (
		<button
			type="button"
			className={`envelope${shown ? ' is-shown' : ''}${labelled ? ' is-labelled' : ''}${clicked ? ' is-clicked' : ''}`}
			onClick={open}
			aria-label="Prenumerera på vårt nyhetsbrev"
			tabIndex={shown ? 0 : -1}>
			<span className="envelope__icon" aria-hidden="true">
				<svg viewBox="0 0 36 40" width="36" height="40">
					{/* the open flap, behind the letter */}
					<path className="envelope__flap-open" d="M2 20 L18 9 L34 20 Z" />
					<rect className="envelope__back" x="2" y="20" width="32" height="18" rx="1.5" />
					<g className="envelope__letter">
						<rect x="6" y="22" width="24" height="15" rx="1" />
						<path d="M10 26.5 H26 M10 29.5 H26 M10 32.5 H20" />
					</g>
					<path className="envelope__front" d="M2 20 L18 31 L34 20 L34 38 L2 38 Z" />
					{/* the closed flap, in front of it */}
					<path className="envelope__flap" d="M2 20 L18 31 L34 20 Z" />
				</svg>
				<span className="envelope__dot" />
			</span>
			<span className="envelope__label">NYHETSBREV</span>
		</button>
	);
}

export default NewsletterEnvelope;

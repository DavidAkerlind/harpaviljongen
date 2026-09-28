import { useEffect, useRef, useState } from 'react';

const SHOW_MS = 10000; // how long each photo is shown
// The fade itself takes 2 s: .hero-slide--enter in heroSection.css

// The next photo starts loading when the rest of the page has, but no later than this.
// Something slow on the live site (the booking window, the API waking up) can keep the
// page "loading" for a minute or more.
const PRELOAD_AFTER_MS = 4000;

// Which width the browser downloads. The photos sit under a dark filter, so a phone held
// upright gets a somewhat smaller file than its full screen resolution; nobody sees the
// difference and it loads faster.
const SIZES = '(orientation: portrait) 50vh, 100vw';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const pageLoaded = () =>
	new Promise((resolve) => {
		if (document.readyState === 'complete') resolve();
		else window.addEventListener('load', resolve, { once: true });
	});

// Downloads and decodes a photo before it's shown, so the fade never shows half a picture.
// false when it can't be loaded. Some browsers turn down decode() now and then although the
// photo loaded, so a loaded photo counts as ready either way.
function prepare(slide) {
	return new Promise((resolve) => {
		const img = new Image();
		img.onload = () =>
			img
				.decode()
				.catch(() => {})
				.then(() => resolve(true));
		img.onerror = () => resolve(false);
		img.sizes = SIZES;
		img.srcset = slide.srcSet;
		img.src = slide.src;
	});
}

// Running only while it can be seen: not in a background tab, not scrolled away.
// It also runs for visitors who have asked their device for less motion: nothing moves,
// the photos only fade into each other, which is what such devices use instead of motion.
function useRunning(ref) {
	const [tabVisible, setTabVisible] = useState(() => !document.hidden);
	const [inView, setInView] = useState(true);

	useEffect(() => {
		const onVisibility = () => setTabVisible(!document.hidden);
		document.addEventListener('visibilitychange', onVisibility);
		return () => document.removeEventListener('visibilitychange', onVisibility);
	}, []);

	useEffect(() => {
		if (!ref.current || !('IntersectionObserver' in window)) return;
		const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting));
		observer.observe(ref.current);
		return () => observer.disconnect();
	}, [ref]);

	return tabVisible && inView;
}

// The home page's hero photos: the first straight away, then a cross-fade to the next one
// every 10 seconds. Only the photo on show and the one fading out are in the page.
function HeroSlideshow({ slides }) {
	const ref = useRef(null);
	const [{ current, previous }, setShown] = useState({ current: 0, previous: null });
	const [retries, setRetries] = useState(0);
	const running = useRunning(ref) && slides.length > 1;

	useEffect(() => {
		if (!running) return;
		let cancelled = false;
		let timer;
		const waited = new Promise((resolve) => {
			timer = setTimeout(resolve, SHOW_MS);
		});
		// Load the next photo while this one is shown, after the rest of the page
		const next = Promise.race([pageLoaded(), delay(PRELOAD_AFTER_MS)]).then(async () => {
			for (let step = 1; step < slides.length; step++) {
				const candidate = (current + step) % slides.length;
				if (cancelled) return null;
				if (await prepare(slides[candidate])) return candidate;
			}
			return null;
		});
		Promise.all([next, waited]).then(([candidate]) => {
			if (cancelled) return;
			if (candidate !== null) setShown({ current: candidate, previous: current });
			// None could be loaded (a moment without network?): try again after another round
			else setRetries((n) => n + 1);
		});
		return () => {
			cancelled = true;
			clearTimeout(timer);
		};
	}, [current, running, slides, retries]);

	return (
		<div className="hero-slideshow" ref={ref}>
			{slides.map((slide, i) => {
				if (i !== current && i !== previous) return null;
				const entering = i === current && previous !== null;
				return (
					<img
						key={slide.name}
						className={[
							'hero-section__img',
							'hero-slide',
							i === current && 'hero-slide--current',
							entering && 'hero-slide--enter',
						]
							.filter(Boolean)
							.join(' ')}
						// sizes and srcSet before src, so no browser fetches the wrong width first
						sizes={SIZES}
						srcSet={slide.srcSet}
						src={slide.src}
						alt={i === current ? slide.alt : ''}
						style={{ objectPosition: slide.position }}
						fetchPriority={i === 0 && previous === null ? 'high' : undefined}
						decoding="async"
						onAnimationEnd={
							entering ? () => setShown((shown) => ({ ...shown, previous: null })) : undefined
						}
					/>
				);
			})}
		</div>
	);
}

export default HeroSlideshow;

import { useEffect, useMemo, useRef, useState } from 'react';

// The fade takes 2 s (.hero-slide--enter in heroSection.css), within each photo's time

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

// The order the photos are shown in on this visit. Shuffled: the first stays first and the
// rest are shuffled once, so every photo comes before any is shown again.
function playOrder(slides, shuffle) {
	if (!shuffle || slides.length < 3) return slides;
	const [first, ...rest] = slides;
	for (let i = rest.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[rest[i], rest[j]] = [rest[j], rest[i]];
	}
	return [first, ...rest];
}

// The home page's hero photos: the first straight away, then a cross-fade to the next one
// every intervalSeconds. Only the photo on show and the one fading out are in the page.
// slides: [{ key, src, srcSet, alt, position }], set in the admin (see useHero.js).
// The list can change while it runs (the admin's photos arrive after the built-in ones);
// the photo on show then fades to the new first photo.
function HeroSlideshow({ slides, slideshow = true, intervalSeconds = 10, shuffle = false }) {
	const ref = useRef(null);
	const order = useMemo(() => playOrder(slides, shuffle), [slides, shuffle]);
	const [{ current, previous }, setShown] = useState(() => ({
		current: order[0]?.key,
		previous: null,
	}));
	const [retries, setRetries] = useState(0);

	// Every photo seen, so the one fading out can still be drawn after the list has changed
	const seen = useRef(new Map());
	for (const slide of order) seen.current.set(slide.key, slide);

	const index = order.findIndex((slide) => slide.key === current);
	// The photo on show should give way to the first one: it's no longer in the list, or the
	// slideshow is off and it isn't the first
	const replaced = order.length > 0 && (index === -1 || (!slideshow && index !== 0));
	const visible = useRunning(ref);
	const running = visible && (replaced || (slideshow && order.length > 1));

	useEffect(() => {
		if (!running) return;
		let cancelled = false;
		let timer;
		const waited = replaced
			? Promise.resolve()
			: new Promise((resolve) => {
					timer = setTimeout(resolve, intervalSeconds * 1000);
				});
		// Load the next photo while this one is shown, after the rest of the page
		const start = replaced ? -1 : index;
		const count = replaced ? order.length : order.length - 1;
		const next = Promise.race([pageLoaded(), delay(replaced ? 0 : PRELOAD_AFTER_MS)]).then(
			async () => {
				for (let step = 1; step <= count; step++) {
					const candidate = order[(start + step) % order.length];
					if (cancelled) return null;
					if (await prepare(candidate)) return candidate.key;
				}
				return null;
			}
		);
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
	}, [current, index, order, replaced, running, intervalSeconds, retries]);

	const onShow = [previous, current]
		.filter((key, i) => key != null && (i === 1 || key !== current))
		.map((key) => seen.current.get(key))
		.filter(Boolean);

	return (
		<div className="hero-slideshow" ref={ref}>
			{onShow.map((slide) => {
				const isCurrent = slide.key === current;
				const entering = isCurrent && previous !== null;
				return (
					<img
						key={slide.key}
						className={[
							'hero-section__img',
							'hero-slide',
							isCurrent && 'hero-slide--current',
							entering && 'hero-slide--enter',
						]
							.filter(Boolean)
							.join(' ')}
						// sizes and srcSet before src, so no browser fetches the wrong width first
						sizes={SIZES}
						srcSet={slide.srcSet}
						src={slide.src}
						alt={isCurrent ? (slide.alt ?? '') : ''}
						style={{ objectPosition: slide.position }}
						fetchPriority={isCurrent && previous === null ? 'high' : undefined}
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

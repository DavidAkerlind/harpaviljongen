import { useEffect, useMemo, useState } from 'react';
import { useSiteConfig, useSiteConfigReady } from '../../API/useSiteConfig';
import { HERO_SLIDES } from './heroSlides';

// On a first visit (nothing saved from an earlier one) the hero waits this long for the
// admin's photos before it shows the built-in ones, so a visitor doesn't see one photo
// replaced by another straight away. The dark background and the logo show meanwhile.
const WAIT_MS = 1500;

// As before the admin could change them
const DEFAULTS = { slideshow: true, intervalSeconds: 10, shuffle: false };

// The home page's photos and how they are shown, from the admin (Startbild):
// { slides, slideshow, intervalSeconds, shuffle }. The built-in photos when none are
// uploaded and shown. null while waiting for the admin's photos.
export function useHero() {
	const { hero } = useSiteConfig();
	const ready = useSiteConfigReady();
	const [waited, setWaited] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setWaited(true), WAIT_MS);
		return () => clearTimeout(timer);
	}, []);

	const content = useMemo(
		() => ({
			slideshow: hero?.slideshow ?? DEFAULTS.slideshow,
			intervalSeconds: hero?.intervalSeconds ?? DEFAULTS.intervalSeconds,
			shuffle: hero?.shuffle ?? DEFAULTS.shuffle,
			slides: hero?.slides?.length
				? hero.slides.map((slide) => ({ ...slide, alt: '' }))
				: HERO_SLIDES,
		}),
		[hero]
	);

	// Only an older API or saved config has no hero at all
	if (!hero && !ready && !waited) return null;
	return content;
}

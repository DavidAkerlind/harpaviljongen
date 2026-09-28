// The photos in the home page's hero slideshow, in order. The first one is always shown
// first (it loads with the page), then the next one fades in every 10 seconds.
//
// name:     the files src/assets/pictures/hero/<name>-<width>.webp, made from the original
//           photo by scripts/hero-images.mjs
// alt:      what the photo shows, for screen readers and search engines
// position: which part of the photo stays in view when the screen's shape differs from the
//           photo's (CSS object-position, '50% 50%' = the middle)
//
// Photos 2–6 only existed as 480×640 px, so they were enlarged 4× with an AI upscaler
// (Real-ESRGAN x4plus) before scripts/hero-images.mjs. If larger originals turn up, run
// them through the script instead.

const SLIDES = [
	{
		name: '1-haren',
		alt: 'Råbiff med krispiga rotfruktschips och krasse, serverad med ett glas bourgogne på Café Harpaviljongen',
		position: '50% 50%',
	},
	{
		name: '2-fikon',
		alt: 'Fikon med kräm, fikonkompott och havrecrunch på ett silverfat',
		position: '50% 55%',
	},
	{
		name: '3-varmratt',
		alt: 'Varmrätt med svamp, brysselkål och potatis i sky, med ett glas rött vin',
		position: '50% 60%',
	},
	{
		name: '4-soppa',
		alt: 'Krämig soppa med svamp och gröna vindruvor, med ett glas vitt vin',
		position: '50% 70%',
	},
	{
		name: '5-musslor',
		alt: 'Musslor i tomatsås med persilja, med surdegsbröd och smör',
		position: '50% 50%',
	},
	{
		name: '6-matsalen',
		alt: 'Dukade bord med vita dukar under gröna taklampor i matsalen på Café Harpaviljongen',
		position: '50% 35%',
	},
];

// Every width of every photo: { '…/2-fikon-720.webp': '/assets/2-fikon-720-a1b2.webp', … }
const FILES = import.meta.glob('../../assets/pictures/hero/*.webp', {
	eager: true,
	import: 'default',
});

// The photo's widths as srcset, and the largest as src
function sources(name) {
	const widths = Object.entries(FILES)
		.map(([file, url]) => {
			const match = file.match(/\/([^/]+)-(\d+)\.webp$/);
			return match?.[1] === name ? { width: Number(match[2]), url } : null;
		})
		.filter(Boolean)
		.sort((a, b) => a.width - b.width);
	return {
		src: widths.at(-1)?.url,
		srcSet: widths.map((w) => `${w.url} ${w.width}w`).join(', '),
	};
}

export const HERO_SLIDES = SLIDES.map((slide) => ({ ...slide, ...sources(slide.name) })).filter(
	(slide) => slide.src
);

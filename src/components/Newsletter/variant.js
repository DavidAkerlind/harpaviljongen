// Three suggestions for how the site asks visitors to sign up for the newsletter. Until one
// is chosen, each is shown only with ?nyhetsbrev=1, 2 or 3 in the address (it's remembered
// while the tab is open, and ?nyhetsbrev=0 turns it off again):
//   1 – Tidningen: a small newspaper front page on the home page, above the footer
//   2 – Brevet:    an envelope button that stays in the corner on every page
//   3 – Vykortet:  a postcard that slides in once the visitor has looked around a while
const KEY = 'hp-nyhetsbrev-forslag';
const VARIANTS = ['1', '2', '3'];

function readVariant() {
	try {
		const asked = new URLSearchParams(window.location.search).get('nyhetsbrev');
		if (asked !== null) {
			if (VARIANTS.includes(asked)) sessionStorage.setItem(KEY, asked);
			else sessionStorage.removeItem(KEY);
		}
		const saved = sessionStorage.getItem(KEY);
		return VARIANTS.includes(saved) ? saved : null;
	} catch {
		return null;
	}
}

export const NEWSLETTER_VARIANT = readVariant();

// "hösten 2026": the season and year, for the newspaper's date line and the postmark
export function seasonNow(date = new Date()) {
	const month = date.getMonth();
	const season =
		month <= 1 || month === 11
			? 'vintern'
			: month <= 4
				? 'våren'
				: month <= 7
					? 'sommaren'
					: 'hösten';
	return { season, year: date.getFullYear() };
}

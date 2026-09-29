// The newsletter's signup form is made in the restaurant's Get a Newsletter account
// (getanewsletter.com): a popup, with its fields, texts and list chosen there.
//
// Its script is loaded the first time a visitor asks for the newsletter (clicks one of our
// buttons), not on every page load. The site stays as fast as before, and nobody gets a
// popup they didn't ask for. For the popup to open right away on that click, its display
// rule in Get a Newsletter should be "show immediately" (0 seconds) on all pages.
const ACCOUNT = 'InNlY3JldC11c2VyLWhhc2gtZm9yLTczNDk3Ig.VxVng4fE1rVQPblat9fmM5EkXa4';

let loaded = false;

export function openNewsletter() {
	if (loaded) return;
	loaded = true;
	// Get a Newsletter's snippet as they give it (with the "||" the pasted copy lost)
	!function(e,t,n,a,c,r){function o(){var e={a:arguments,q:[]},t=this.push(e)
	;return"number"!=typeof t?t:o.bind(e.q)}
	e.GetanewsletterObject=c,o.q=o.q||[],e[c]=e[c]||o.bind(o.q),
	e[c].q=e[c].q||o.q,r=t.createElement(n);var i=t.getElementsByTagName(n)[0]
	;r.async=1,
	r.src="https://cdn.getanewsletter.com/js-forms-assets/universal.js?v"+~~((new Date).getTime()/1e6),
	i.parentNode.insertBefore(r,i)}(window,document,"script",0,"gan");
	window.gan_account = window.gan('accounts', ACCOUNT, 'load');
}

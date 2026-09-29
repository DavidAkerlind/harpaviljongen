import { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../API/apiBase';
import './newsletter.css';

// The newsletter signup: an email field with the button in it (under it on phones). The
// address goes to the API, which passes it on to the restaurant's Get a Newsletter account
// (POST /api/newsletter). "Få vårat nyhetsbrev" in the menu leads here (#nyhetsbrev).
function errorText(err) {
	const status = err.response?.status;
	if (status === 400) return 'Kontrollera e-postadressen och försök igen.';
	if (status === 429) return 'För många försök. Vänta en stund och försök igen.';
	return 'Det gick inte att anmäla dig just nu. Försök igen om en stund.';
}

function Newsletter() {
	const [email, setEmail] = useState('');
	// A field people never see; bots fill it in (the API then ignores the signup)
	const [website, setWebsite] = useState('');
	const [state, setState] = useState({ status: 'idle', message: '' });
	const sending = state.status === 'sending';

	const submit = async (e) => {
		e.preventDefault();
		if (sending) return;
		setState({ status: 'sending', message: '' });
		try {
			// Long timeout: the API can take a while to wake up
			await axios.post(`${API_URL}/newsletter`, { email: email.trim(), website }, { timeout: 30000 });
			setState({ status: 'done', message: 'Tack! Håll utkik i din inkorg.' });
		} catch (err) {
			setState({ status: 'error', message: errorText(err) });
		}
	};

	return (
		<section className="newsletter" id="nyhetsbrev" aria-labelledby="newsletter-title">
			<h2 className="newsletter__title" id="newsletter-title">
				NYHETSBREV
			</h2>
			<p className="newsletter__text">Kom in i värmen och ha koll på det senaste hos oss</p>

			{state.status === 'done' ? (
				<p className="newsletter__thanks" role="status">
					{state.message}
				</p>
			) : (
				<form className="newsletter__form" onSubmit={submit}>
					<label className="newsletter__label" htmlFor="newsletter-email">
						E-postadress
					</label>
					<input
						id="newsletter-email"
						className="newsletter__input"
						type="email"
						name="email"
						inputMode="email"
						autoComplete="email"
						placeholder="Din e-postadress"
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						disabled={sending}
						aria-describedby={state.status === 'error' ? 'newsletter-error' : undefined}
					/>
					<input
						className="newsletter__trap"
						type="text"
						name="website"
						tabIndex={-1}
						autoComplete="off"
						aria-hidden="true"
						value={website}
						onChange={(e) => setWebsite(e.target.value)}
					/>
					<button className="newsletter__button" type="submit" disabled={sending} aria-busy={sending}>
						Prenumerera
					</button>
				</form>
			)}
			{state.status === 'error' && (
				<p className="newsletter__error" id="newsletter-error" role="alert">
					{state.message}
				</p>
			)}
		</section>
	);
}

export default Newsletter;

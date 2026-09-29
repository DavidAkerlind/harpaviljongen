import { useRef, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../API/apiBase';
import './newsletter.css';

// The newsletter signup: an email field with the button in it (under it on phones). The
// address goes to the API, which passes it on to the restaurant's Get a Newsletter account
// (POST /api/newsletter). "Få vårat nyhetsbrev" in the menu leads here (#nyhetsbrev).
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// What is wrong with the address, or null when it looks like one
function emailProblem(email) {
	if (!email) return 'Du har inte fyllt i någon e-postadress.';
	if (!EMAIL_PATTERN.test(email))
		return 'Det där ser inte ut som en e-postadress. Skriv den som namn@exempel.se.';
	return null;
}

function errorText(err) {
	const status = err.response?.status;
	if (status === 400) return 'Kontrollera e-postadressen och försök igen.';
	if (status === 429)
		return 'För många försök. Vänta en stund och försök igen.';
	return 'Det gick inte att anmäla dig just nu. Försök igen om en stund.';
}

// field: the address itself is wrong, so the field turns red (not when the API is down)
const fieldError = (message) => ({ status: 'error', message, field: true });
const IDLE = { status: 'idle', message: '' };

function Newsletter() {
	const [email, setEmail] = useState('');
	// A field people never see; bots fill it in (the API then ignores the signup)
	const [website, setWebsite] = useState('');
	const [state, setState] = useState(IDLE);
	const inputRef = useRef(null);
	const sending = state.status === 'sending';
	const invalid = state.status === 'error' && state.field;

	// Errors only show after a try to sign up; typing again clears them until the next try
	const change = (e) => {
		setEmail(e.target.value);
		if (state.status === 'error') setState(IDLE);
	};

	const submit = async (e) => {
		e.preventDefault();
		if (sending) return;
		const value = email.trim();
		const problem = emailProblem(value);
		if (problem) {
			setState(fieldError(problem));
			inputRef.current?.focus();
			return;
		}
		setState({ status: 'sending', message: '' });
		try {
			// Long timeout: the API can take a while to wake up
			await axios.post(
				`${API_URL}/newsletter`,
				{ email: value, website },
				{ timeout: 30000 },
			);
			setState({
				status: 'done',
				message: 'Tack! Håll utkik i din inkorg.',
			});
		} catch (err) {
			const status = err.response?.status;
			setState({
				status: 'error',
				message: errorText(err),
				field: status === 400,
			});
		}
	};

	return (
		<section
			className="newsletter"
			id="nyhetsbrev"
			aria-labelledby="newsletter-title">
			<h2 className="newsletter__title" id="newsletter-title">
				HÅLL DIG NÄRA
			</h2>
			<p className="newsletter__text">
				Nya menyer, bord, vin och kvällar på Harpaviljongen{' '}
			</p>

			{state.status === 'done' ? (
				<p className="newsletter__thanks" role="status">
					{state.message}
				</p>
			) : (
				// noValidate: our own messages below the field instead of the browser's bubble
				<form
					className={`newsletter__form${invalid ? ' newsletter__form--invalid' : ''}`}
					onSubmit={submit}
					noValidate>
					<label
						className="newsletter__label"
						htmlFor="newsletter-email">
						E-postadress
					</label>
					<input
						ref={inputRef}
						id="newsletter-email"
						className="newsletter__input"
						type="email"
						name="email"
						inputMode="email"
						autoComplete="email"
						placeholder="e-postadress"
						value={email}
						required
						onChange={change}
						disabled={sending}
						aria-invalid={invalid}
						aria-describedby={
							state.status === 'error'
								? 'newsletter-error'
								: undefined
						}
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
					<button
						className="newsletter__button"
						type="submit"
						disabled={sending}
						aria-busy={sending}>
						Prenumerera
					</button>
				</form>
			)}
			{state.status === 'error' && (
				<p
					className="newsletter__error"
					id="newsletter-error"
					role="alert">
					{state.message}
				</p>
			)}
		</section>
	);
}

export default Newsletter;

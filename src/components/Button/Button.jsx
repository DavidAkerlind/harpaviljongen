import './button.css';
import { Link } from 'react-router-dom';

function Button({ text, onClick, link }) {
	if (link === '#top') {
		return (
			<button
				className="button button--full-width"
				aria-label="Gå till toppen"
				onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
				{text}
			</button>
		);
	}

	if (link && (link.startsWith('http') || link.endsWith('.pdf'))) {
		const href = link.endsWith('.pdf') ? `${link}#zoom=70` : link;
		return (
			<a
				href={href}
				className="button"
				aria-label={`GO TO ${text}`}
				target="_blank"
				rel="noopener noreferrer">
				{text}
			</a>
		);
	}

	if (link) {
		return (
			<Link to={link} className="button" aria-label={`GO TO ${text}`}>
				{text}
			</Link>
		);
	}

	return (
		<button className="button" aria-label={text} onClick={onClick}>
			{text}
		</button>
	);
}

export default Button;

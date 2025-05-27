import './button.css';
import { Link } from 'react-router-dom';

function Button({ text, onClick, link }) {
	if (link) {
		const isToTop = link === '#top';
		return (
			<Link
				to={link}
				className={`button ${isToTop ? 'button--full-width' : ''}`}
				aria-label={`GO TO ${text}`}>
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

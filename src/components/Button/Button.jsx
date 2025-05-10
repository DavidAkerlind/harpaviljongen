import './button.css';
import { Link } from 'react-router-dom';

function Button({ text, onClick, link }) {
	console.log(link);
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

import './pageHeader.css';
import { Link } from 'react-router-dom';

function PageHeader({ text, link = '/', page }) {
	if (page === 'home') {
		return (
			<h1 className="page-header page-header--home">
				<Link className="link" aria-label="Go to Home page" to={link}>
					<span className="page-header__cafe">CAFÉ</span>
					<span className="page-header__title">{text}</span>
					<span className="page-header__anno">ANNO 1912</span>
				</Link>
			</h1>
		);
	}

	return (
		<h1 className="page-header">
			<Link className="link" aria-label={`Go to Home page`} to={link}>
				{text}
			</Link>
		</h1>
	);
}

export default PageHeader;

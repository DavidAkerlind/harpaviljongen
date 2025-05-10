import './pageHeader.css';
import { Link } from 'react-router-dom';

function PageHeader({ text, link = '/' }) {
	return (
		<h1 className="page-header">
			<Link className="link" aria-label={`Go to Home page`} to={link}>
				{text}
			</Link>
		</h1>
	);
}

export default PageHeader;

import './menuItem.css';

function MenuItem({ title, description, price, producer }) {
	return (
		<article className="menu-item">
			<h3 className="menu-item__title">{title}</h3>
			<p className="menu-item__description">
				{producer && (
					<>
						<strong> Producent:</strong> <em>{producer}</em>
						<br />
						<br />
					</>
				)}
				{description}
			</p>

			{price && <p className="menu-item__price">{price}:-</p>}
		</article>
	);
}

export default MenuItem;

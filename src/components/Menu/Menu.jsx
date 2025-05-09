import './menu.css';
import MenuItem from '../MenuItem/MenuItem';
// import logo from '../../assets/logo/hare-logo-blue.svg';

function Menu({ title, type, menu, img }) {
	return (
		<section className="menu">
			<h2 className="menu__title">{title}</h2>

			{type === 'lunch' && (
				<p className="menu__description">
					Serveras tisdag till söndag mellan
					<br />
					<strong>11:00 och 15:00</strong>
				</p>
			)}

			{type === 'wine' && (
				<h2
					aria-label="pris per vinglas"
					className=" menu__description menu__description--price">
					165:- <strong>/glas</strong>
				</h2>
			)}

			<section className="menu__items">
				{menu.map((item, index) => (
					<MenuItem
						key={index}
						title={item.title}
						description={item.description}
						price={item.price}
						producer={item.producer}
					/>
				))}
			</section>

			{img && (
				<figure className={`background-img ${type}`}>
					<img src={img} alt={img} />
				</figure>
			)}
		</section>
	);
}

export default Menu;

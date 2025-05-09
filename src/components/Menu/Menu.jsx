import './menu.css';
import MenuItem from '../MenuItem/MenuItem';
import logo from '../../assets/hare-logo-blue.svg';

function Menu({ title, type, menu, hasLogo }) {
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
				<p className=" menu__description menu__description--price">
					165:- <strong>/glas</strong>
				</p>
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

			{hasLogo && (
				<figure className="menu__logo">
					<img src={logo} alt="logo" />
				</figure>
			)}
		</section>
	);
}

export default Menu;

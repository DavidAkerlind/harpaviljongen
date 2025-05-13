import './menu.css';
import MenuItem from '../MenuItem/MenuItem';
import BackgroundImage from '../BackgroundImage/BackgroundImage';
import { fetchMenuById } from '../../API/fetchMenuById';
import { devfetchMenuById } from '../../API/devfetchMenuById';

function Menu({ menuId, img }) {
	const { fetchedMenu, loading, error } = fetchMenuById(menuId);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error loading menu: {error.message}</p>;

	const { title, description, type, price, items } = fetchedMenu;

	return (
		<section id={`menu ${type}`} className={`menu ${type}`}>
			<h2 className="menu__title">{title}</h2>

			{description && <p className="menu__description">{description}</p>}

			{type === 'wine' && (
				<h2
					aria-label="pris per vinglas"
					className=" menu__description menu__description--price">
					{price} <strong>/glas</strong>
				</h2>
			)}

			<section className="menu__items">
				{items
					.filter((item) => item.active)
					.map((item, index) => (
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
				<BackgroundImage
					img={img}
					altText={`background image ${type}`}
					type={type}
				/>
			)}
		</section>
	);
}

export default Menu;

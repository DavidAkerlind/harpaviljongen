import menu from '../../assets/menus/menu-09-may.png';

function MenuPage() {
	return (
		<section className="page page-menu">
			<iframe
				src={menu}
				width="100%"
				height="600px"
				style={{ border: 'none' }}
				title="Meny"></iframe>
		</section>
	);
}

export default MenuPage;

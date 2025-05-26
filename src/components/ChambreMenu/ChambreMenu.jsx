import './chambreMenu.css';

function ChambreMenu() {
	return (
		<article id="chambreMenu" className="chambre-menu">
			<section className="chambre-menu__courses">
				<article className="chambre-menu__course">
					<h3 className="chambre-menu__course-title">FÖRRÄTT</h3>
					<p className="chambre-menu__course-text">
						Vi vevar ut ett urval av finaste{' '}
						<strong>charkuterier</strong> från vår Berkel Volano P15
						– ett startskott med både hantverk och tradition i varje
						skiva.
					</p>
					<p className="chambre-menu__course-text">
						Därefter serveras vår signatur: en{' '}
						<strong>krokett</strong> krokett på Västerbottensost,
						toppad med exklusiv störcaviar.
					</p>
					<p className="chambre-menu__course-text">
						<strong>Toast Skagen</strong>, serverad på smörstekt
						bröd från Två Systrars Bageri, generöst toppad med Kalix
						löjrom.
					</p>
				</article>

				<article className="chambre-menu__course">
					<h3 className="chambre-menu__course-title">HUVUDRÄTT</h3>
					<p className="chambre-menu__course-text">Välj mellan:</p>
					<ul className="chambre-menu__course-list">
						<li className="chambre-menu__course-list-item">
							Côte de bœuf med klassiska tillbehör
						</li>
						<li className="chambre-menu__course-list-item">
							Piggvar på ben – varsamt tillagad med noggrant
							utvalda ackompanjemang
						</li>
					</ul>
				</article>

				<article className="chambre-menu__course">
					<h3 className="chambre-menu__course-title">DESSERT</h3>
					<p className="chambre-menu__course-text">
						Varm Tarte Tatin på Calvados, serverad med len
						vaniljglass
					</p>
				</article>
			</section>

			<section className="chambre-menu__price-info">
				<h3 className="chambre-menu__price-title">PRIS</h3>
				<ul className="chambre-menu__price-list">
					<li className="chambre-menu__price-list-item chambre-menu__price-list-item--price">
						Meny: 1250 kr
					</li>
					<li className="chambre-menu__price-list-item chambre-menu__price-list-item--price">
						Vinpaket: 850 kr
					</li>
				</ul>
			</section>

			<section className="chambre-menu__footer">
				<p className="chambre-menu__footer-text">
					Vi inspireras av det franska köket men låter även våra egna
					minnen, favoriter och smaker få ta plats. Hos oss är chambre
					séparée inte bara ett rum – det är en upplevelse. <br />
					<br />
					Välkommen hem till Harpaviljongen.
				</p>
			</section>
		</article>
	);
}

export default ChambreMenu;

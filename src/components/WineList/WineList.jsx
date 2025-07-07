import './wineList.css';
import { fetchWineList } from '../../API/fetchWineList';
import MenuSkeleton from '../Skeleton/Skeleton';

function WineList() {
	const { fetchedWineList, loading, error } = fetchWineList();

	if (loading) return <MenuSkeleton />;
	if (error) return <MenuSkeleton />;

	if (!Array.isArray(fetchedWineList)) {
		return <p>Ingen vinlista hittades.</p>;
	}

	return (
		<section className="wine-list">
			{fetchedWineList.map((wineCategory) => (
				<section key={wineCategory._id} className="wine-list__category">
					{/* Titel, t.ex. VITT */}
					<h2 className="wine-list__title">{wineCategory.title}</h2>
					{wineCategory.countries &&
						Object.values(wineCategory.countries).map((country) => (
							<section
								key={country.country}
								className="wine-list__country">
								{/* Land i italic */}
								<h3 className="wine-list__country-name">
									<em>{country.country}</em>
								</h3>
								{country.areas.map((areaObj, i) => (
									<section
										key={areaObj.area || i}
										className="wine-list__area-block">
										{/* Om area är "other", visa inget, annars visa area i versaler */}
										{areaObj.area &&
										areaObj.area.toLowerCase() !==
											'other' ? (
											<h4 className="wine-list__area">
												{areaObj.area.toUpperCase()}
											</h4>
										) : (
											<h4 className="wine-list__area wine-list__area--empty"></h4>
										)}
										{/* Lista viner */}
										{areaObj.items.map((item) => (
											<article
												key={item._id}
												className="wine-list__wine-row">
												<h5 className="wine-list__wine-name">
													{item.name}
												</h5>
												<span className="wine-list__wine-dots"></span>

												<h5 className="wine-list__wine-price">
													{item.price} kr
												</h5>
											</article>
										))}
									</section>
								))}
							</section>
						))}
				</section>
			))}
		</section>
	);
}

export default WineList;

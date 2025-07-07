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
				<div key={wineCategory._id} className="wine-list__category">
					{/* Titel, t.ex. VITT */}
					<h2 className="wine-list__title">{wineCategory.title}</h2>
					{wineCategory.countries &&
						Object.values(wineCategory.countries).map((country) => (
							<div
								key={country.country}
								className="wine-list__country">
								{/* Land i italic */}
								<div className="wine-list__country-name">
									<em>{country.country}</em>
								</div>
								{country.areas.map((areaObj, i) => (
									<div
										key={areaObj.area || i}
										className="wine-list__area-block">
										{/* Om area är "other", visa inget, annars visa area i versaler */}
										{areaObj.area &&
										areaObj.area.toLowerCase() !==
											'other' ? (
											<div className="wine-list__area">
												{areaObj.area.toUpperCase()}
											</div>
										) : (
											<div className="wine-list__area wine-list__area--empty"></div>
										)}
										{/* Lista viner */}
										{areaObj.items.map((item) => (
											<div
												key={item._id}
												className="wine-list__wine-row">
												<span className="wine-list__wine-name">
													{item.name}
												</span>
												<span className="wine-list__wine-price">
													{item.price} kr
												</span>
											</div>
										))}
									</div>
								))}
							</div>
						))}
				</div>
			))}
		</section>
	);
}

export default WineList;

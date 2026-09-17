import './map.css';

const ADDRESS = 'Södra Fiskartorpsvägen 29, 114 33 Stockholm';
const MAP_SRC = `https://maps.google.com/maps?q=${encodeURIComponent(
	ADDRESS,
)}&t=m&z=15&output=embed&iwloc=near`;

function Map() {
	return (
		<div className="map">
			<div className="map__frame">
				<iframe
					title="Karta till Harpaviljongen"
					loading="lazy"
					src={MAP_SRC}
					height="100%"
					width="100%"
				/>
			</div>
		</div>
	);
}

export default Map;

import { useEffect, useRef, useState } from 'react';
import './map.css';

const QUERY = 'Harpaviljongen, Södra Fiskartorpsvägen 29, 114 33 Stockholm';
const MAP_SRC = `https://maps.google.com/maps?q=${encodeURIComponent(
	QUERY,
)}&t=m&z=16&output=embed&iwloc=near`;

function Map() {
	const containerRef = useRef(null);
	const [inView, setInView] = useState(false);

	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					observer.disconnect();
					setInView(true);
				}
			},
			{ rootMargin: '200px' },
		);
		observer.observe(el);

		return () => observer.disconnect();
	}, []);

	return (
		<div className="map" ref={containerRef}>
			<div className="map__frame">
				{inView && (
					<iframe
						title="Karta till Café Harpaviljongen"
						src={MAP_SRC}
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						height="100%"
						width="100%"
					/>
				)}
			</div>
		</div>
	);
}

export default Map;

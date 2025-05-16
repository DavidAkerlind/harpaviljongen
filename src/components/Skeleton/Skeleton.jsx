// components/MenuSkeleton.jsx
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './skeleton.css';
function MenuSkeleton({ count = 1 }) {
	return (
		<>
			{Array(count)
				.fill(0)
				.map((_, i) => (
					<div className="menu-item menu-item--skeleton" key={i}>
						<h3>
							<Skeleton
								className="skeleton"
								width={200}
								height={30}
								baseColor="#bccae2a4"
							/>
						</h3>
						<p>
							<Skeleton
								className="skeleton"
								count={1}
								width={300}
								height={150}
								baseColor="#bccae2a4"
							/>
						</p>
					</div>
				))}
		</>
	);
}

export default MenuSkeleton;

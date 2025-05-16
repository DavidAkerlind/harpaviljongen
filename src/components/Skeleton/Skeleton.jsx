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
					<div className="menu-item" key={i}>
						<h3>
							<Skeleton
								className="skeleton-animate"
								width={200}
								height={24}
								baseColor="#bccae2a4"
								highlightColor="#cadcfb"
							/>
						</h3>
						<p>
							<Skeleton
								className="skeleton-animate"
								count={2}
								width={300}
								baseColor="#bccae2a4"
								highlightColor="#cadcfb"
							/>
						</p>
					</div>
				))}
		</>
	);
}

export default MenuSkeleton;

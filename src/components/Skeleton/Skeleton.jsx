// components/MenuSkeleton.jsx
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function MenuSkeleton({ count = 1 }) {
	return (
		<>
			{Array(count)
				.fill(0)
				.map((_, i) => (
					<div className="menu-item" key={i}>
						<h3>
							<Skeleton
								width={200}
								height={24}
								baseColor="#a3cbe5"
								highlightColor="#cadcfb"
							/>
						</h3>
						<p>
							<Skeleton
								count={2}
								width={300}
								baseColor="#a3cbe5"
								highlightColor="#cadcfb"
							/>
						</p>
					</div>
				))}
		</>
	);
}

export default MenuSkeleton;

import './grid.css';

function Grid({ children, gap = '1rem', minColumnWidth = '200px' }) {
	return (
		<div
			style={{
				display: 'grid',
				gap,
				gridTemplateColumns: `repeat(auto-fit, minmax(${minColumnWidth}, 1fr))`,
			}}>
			{children}
		</div>
	);
}

export default Grid;

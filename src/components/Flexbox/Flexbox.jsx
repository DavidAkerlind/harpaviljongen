import './flexbox.css';

function Flexbox({
	children,
	direction = 'row',
	wrap = 'nowrap',
	justify = 'flex-start',
	align = 'stretch',
}) {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: direction,
				flexWrap: wrap,
				justifyContent: justify,
				alignItems: align,
			}}>
			{children}
		</div>
	);
}

export default Flexbox;

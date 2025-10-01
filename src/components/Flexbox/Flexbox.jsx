import './flexbox.css';
import React from 'react';

function Flexbox({
	children,
	direction = 'row',
	wrap = 'nowrap',
	justify = 'center',
	align = 'center',
	childFlex = true,
	gap = '2',
}) {
	const wrappedChildren = childFlex
		? React.Children.map(children, (child) => (
				<section
					className="flexbox-inside"
					style={{
						flex: 1,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}>
					{child}
				</section>
		  ))
		: children;

	return (
		<section
			className="flexbox"
			style={{
				display: 'flex',
				flexWrap: wrap,
				justifyContent: justify,
				alignItems: align,
				gap: gap,
			}}>
			{wrappedChildren}
		</section>
	);
}

export default Flexbox;

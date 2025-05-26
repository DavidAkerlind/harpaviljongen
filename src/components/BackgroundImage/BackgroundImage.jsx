import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import './BackgroundImage.css';

const yMaxOffsetMap = {
	lunch: 150,
	wine: 200,
	snack: 200,
	default: 200,
};
const scaleMap = {
	all: 'scaleX(-1)',
	snack: 'scaleY(1)',
	event: 'scaleX(-1)',
	default: '',
};

function BackgroundImage({ img, altText = 'harpaviljongen logo', type = '' }) {
	const { scrollY } = useScroll(); // detta observerar hela sidans scroll
	const transform = useTransform(
		scrollY,
		[0, 1000],
		[
			`translateY(0px) ${scaleMap[type] || scaleMap.default}`,
			`translateY(${yMaxOffsetMap[type] || yMaxOffsetMap.default}px) ${
				scaleMap[type] || scaleMap.default
			}`,
		]
	);

	return (
		<motion.figure
			className={`background-img ${type}`}
			style={{ transform }}>
			<img src={img} alt={altText} loading="lazy" />
		</motion.figure>
	);
}

export default BackgroundImage;

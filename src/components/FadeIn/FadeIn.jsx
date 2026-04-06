import { useEffect, useRef } from 'react';
import './fadeIn.css';

function FadeIn({ children, delay = 0, direction = 'up' }) {
	const ref = useRef(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					el.style.transitionDelay = `${delay}ms`;
					el.classList.add('is-visible');
					observer.unobserve(el);
				}
			},
			{ threshold: 0.1, rootMargin: '0px 0px -30px 0px' },
		);

		observer.observe(el);
		return () => observer.disconnect();
	}, [delay]);

	return (
		<div ref={ref} className={`fade-in fade-in--${direction}`}>
			{children}
		</div>
	);
}

export default FadeIn;

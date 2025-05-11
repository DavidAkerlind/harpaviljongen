import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import NavBar from '../../components/NavBar/NavBar';
import Menu from '../../components/Menu/Menu';
import { weeklyLunch, weeklyWine } from '../../data/data';
import OpeningHours from '../../components/OpeningHours/OpeningHours';
import Flexbox from '../../components/Flexbox/Flexbox';
import Grid from '../../components/Grid/Grid';
import hareLogo from '../../assets/logo/hare-logo-blue.svg';
import wineIllustration from '../../assets/illustrations/wineglass-filled.svg';
import clockIllustration from '../../assets/illustrations/clock.svg';
import PageHeader from '../../components/PageHeader/PageHeader';
import Button from '../../components/Button/Button';

function HomePage() {
	const location = useLocation();

	useEffect(() => {
		if (location.hash) {
			const id = location.hash.replace('#', '');
			const el = document.getElementById(id);

			if (el) {
				el.scrollIntoView({ behavior: 'smooth' });
			} else {
				console.log('HEJ');
			}
		}
	}, [location]);

	return (
		<section className="page page-home">
			<NavBar />
			<PageHeader text="HARPAVILJONGEN" />
			<section className="page__top-section">
				<Button text="MENY" link="/menu" />
			</section>
			<Menu menu={weeklyLunch} img={hareLogo} />

			<Flexbox>
				<Menu menu={weeklyWine} img={wineIllustration} />
				<OpeningHours img={clockIllustration} />
			</Flexbox>
		</section>
	);
}

export default HomePage;

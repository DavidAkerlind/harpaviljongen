import { HashRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));
const MenuPage = lazy(() => import('./pages/MenuPage/MenuPage'));
const ChambrePage = lazy(() => import('./pages/ChambrePage/ChambrePage'));
const LoadingPage = lazy(() => import('./pages/LoadingPage/LoadingPage'));
const SingleEventPage = lazy(() =>
	import('./pages/SingleEventPage/SingleEventPage')
);
const GalleryPage = lazy(() => import('./pages/GalleryPage/GalleryPage'));
const WineListPage = lazy(() => import('./pages/WineListPage/WineListPage'));

function App() {
	return (
		<div className="app">
			<HashRouter>
				<ScrollToTop />
				<Routes>
					<Route
						path="/"
						element={
							<Suspense fallback={<LoadingPage />}>
								<HomePage />
							</Suspense>
						}
					/>
					<Route
						path="/menu"
						element={
							<Suspense fallback={<LoadingPage />}>
								<MenuPage />
							</Suspense>
						}
					/>

					<Route
						path="/chambre"
						element={
							<Suspense fallback={<LoadingPage />}>
								<ChambrePage />
							</Suspense>
						}
					/>
					<Route
						path="/gallery"
						element={
							<Suspense fallback={<LoadingPage />}>
								<GalleryPage />
							</Suspense>
						}
					/>
					<Route
						path="/event/:eventId"
						element={
							<Suspense fallback={<LoadingPage />}>
								<SingleEventPage />
							</Suspense>
						}
					/>

					<Route
						path="/loading"
						element={
							<Suspense fallback={<ErrorPage />}>
								<LoadingPage />
							</Suspense>
						}
					/>
					<Route
						path="/wine-list"
						element={
							<Suspense fallback={<LoadingPage />}>
								<WineListPage />
							</Suspense>
						}
					/>
					<Route
						path="*"
						element={
							<Suspense fallback={<LoadingPage />}>
								<ErrorPage />
							</Suspense>
						}
					/>
				</Routes>
			</HashRouter>
		</div>
	);
}

export default App;

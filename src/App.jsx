import { HashRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));
const MenuPage = lazy(() => import('./pages/MenuPage/MenuPage'));
const ChambrePage = lazy(() => import('./pages/ChambrePage/ChambrePage'));
const NewsPage = lazy(() => import('./pages/NewsPage/NewsPage'));
const LoadingPage = lazy(() => import('./pages/LoadingPage/LoadingPage'));

function App() {
	return (
		<div className="app">
			<HashRouter>
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
						path="/news"
						element={
							<Suspense fallback={<LoadingPage />}>
								<NewsPage />
							</Suspense>
						}
					/>

					<Route
						path="/loading"
						element={
							<Suspense fallback={<LoadingPage />}>
								<LoadingPage />
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

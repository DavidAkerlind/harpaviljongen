import {
	createBrowserRouter,
	RouterProvider,
	HashRouter,
	Routes,
	Route,
} from 'react-router-dom';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));
const WinePage = lazy(() => import('./pages/WinePage/WinePage'));
const MenuPage = lazy(() => import('./pages/MenuPage/MenuPage'));

function App() {
	return (
		<div className="app">
			<HashRouter>
				<Routes>
					<Route
						path="/"
						element={
							<Suspense
								fallback={
									<div className="page">Loading...</div>
								}>
								<HomePage />
							</Suspense>
						}
					/>
					<Route
						path="/menu"
						element={
							<Suspense
								fallback={
									<div className="page">Loading...</div>
								}>
								<MenuPage />
							</Suspense>
						}
					/>
					<Route
						path="/wine"
						element={
							<Suspense
								fallback={
									<div className="page">Loading...</div>
								}>
								{<WinePage />}
							</Suspense>
						}
					/>
					<Route
						path="*"
						element={
							<Suspense
								fallback={
									<div className="page">Loading...</div>
								}>
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

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));
const WinePage = lazy(() => import('./pages/WinePage/WinePage'));
const MenuPage = lazy(() => import('./pages/MenuPage/MenuPage'));
const ContactPage = lazy(() => import('./pages/ContactPage/ContactPage'));
const NewsPage = lazy(() => import('./pages/NewsPage/NewsPage'));
const FaqPage = lazy(() => import('./pages/FaqPage/FaqPage'));
const MenuSkeleton = lazy(() => import('./components/Skeleton/Skeleton'));
const LoadingPage = lazy(() => import('./pages/LoadingPage/LoadingPage'));

function App() {
	return (
		<div className="app">
			<BrowserRouter>
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
						path="/wine"
						element={
							<Suspense fallback={<LoadingPage />}>
								<WinePage />
							</Suspense>
						}
					/>
					<Route
						path="/contact"
						element={
							<Suspense fallback={<LoadingPage />}>
								<ContactPage />
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
						path="/faq"
						element={
							<Suspense fallback={<LoadingPage />}>
								<FaqPage />
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
							<Suspense fallback={<MenuSkeleton />}>
								<ErrorPage />
							</Suspense>
						}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

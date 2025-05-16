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
							<Suspense fallback={<MenuSkeleton />}>
								<HomePage />
							</Suspense>
						}
					/>
					<Route
						path="/menu"
						element={
							<Suspense fallback={<MenuSkeleton />}>
								<MenuPage />
							</Suspense>
						}
					/>
					<Route
						path="/wine"
						element={
							<Suspense fallback={<MenuSkeleton />}>
								<WinePage />
							</Suspense>
						}
					/>
					<Route
						path="/contact"
						element={
							<Suspense fallback={<MenuSkeleton />}>
								<ContactPage />
							</Suspense>
						}
					/>
					<Route
						path="/news"
						element={
							<Suspense fallback={<MenuSkeleton />}>
								<NewsPage />
							</Suspense>
						}
					/>
					<Route
						path="/faq"
						element={
							<Suspense fallback={<MenuSkeleton />}>
								<FaqPage />
							</Suspense>
						}
					/>
					<Route
						path="/loading"
						element={
							<Suspense fallback={<MenuSkeleton />}>
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

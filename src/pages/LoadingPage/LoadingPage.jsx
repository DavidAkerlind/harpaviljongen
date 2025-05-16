import Flexbox from '../../components/Flexbox/Flexbox';
import PageHeader from '../../components/PageHeader/PageHeader';
import MenuSkeleton from '../../components/Skeleton/Skeleton';
import './loadingPage.css';

function LoadingPage() {
	return (
		<section className="page page-loading">
			<PageHeader text="HARPAVILJONGEN" />
			<section className="page-loading__top-section">
				<MenuSkeleton />
				<MenuSkeleton />
			</section>
		</section>
	);
}

export default LoadingPage;

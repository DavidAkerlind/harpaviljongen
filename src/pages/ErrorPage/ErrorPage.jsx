import NavBar from '../../components/NavBar/NavBar';
import PageHeader from '../../components/PageHeader/PageHeader';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import storeFront from '../../assets/illustrations/storefront.svg';
import Button from '../../components/Button/Button';
import './errorPage.css';
import Flexbox from '../../components/Flexbox/Flexbox';
function ErrorPage() {
	return (
		<section className="page page-error">
			{/* <NavBar /> */}
			<PageHeader text="HARPAVILJONGEN" />
			<Flexbox marginBlock="8rem">
				<section className="page__error-section">
					<h2 className="error-section__title">404</h2>
					<p className="error-section__subtitle">
						Sidan hittades inte
					</p>
				</section>
				<BackgroundImage
					img={storeFront}
					altText={`background image 404`}
					type="error"
				/>
			</Flexbox>
			<Button text="GÅ TILL HEMSIDAN" link="/" />
		</section>
	);
}

export default ErrorPage;

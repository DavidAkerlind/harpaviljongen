import NavBar from '../../components/NavBar/NavBar';
import Menu from '../../components/Menu/Menu';
import { Link } from 'react-router-dom';
import { lunches, wineList } from '../../data/data';
import OpeningHours from '../../components/OpeningHours/OpeningHours';
import Flexbox from '../../components/Flexbox/Flexbox';
import Grid from '../../components/Grid/Grid';
import hareLogo from '../../assets/logo/hare-logo-blue.svg';
import wineIllustration from '../../assets/illustrations/wineglass-filled.svg';

function HomePage() {
	return (
		<section className="page page-home">
			<NavBar></NavBar>
			<h1 className="page-header">
				<Link className="link" aria-label={`Go to Home page`} to={'/'}>
					HARPAVILJONGEN
				</Link>
			</h1>

			<Menu
				title="VECKANS LUNCH"
				type="lunch"
				menu={lunches}
				logo={hareLogo}
			/>

			<Flexbox>
				<Menu
					title="VECKANS VINER"
					type="wine"
					menu={wineList}
					logo={wineIllustration}
				/>
				<OpeningHours />
			</Flexbox>
		</section>
	);
}

export default HomePage;

/*
Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, magni. Rerum cum quisquam quas totam pariatur. Nobis atque fugit alias dolorum repellendus dolores explicabo accusamus, impedit est sint dolore iusto.
Odit aliquam hic minus possimus consequuntur! Maiores, commodi deserunt suscipit quam saepe delectus perferendis eum voluptatum, impedit quod eveniet ratione nostrum, possimus pariatur? Qui sed obcaecati eum, rem magnam odit.
Magnam vel quam ea aspernatur inventore. Error nam maiores id repellendus aperiam ut, nemo natus exercitationem, aspernatur, debitis quasi. Placeat ipsam ducimus, nulla reiciendis laudantium neque. Qui porro aliquam et.
In quam provident repellat voluptatem laudantium quod, quia ex accusantium harum fuga soluta, nam assumenda amet sapiente! Alias, optio qui. In repellat ipsam velit corrupti eveniet a aspernatur cumque saepe!
Cum soluta ipsum hic illum architecto culpa, tempora facilis adipisci est recusandae. Magnam voluptas fuga expedita, ad neque, vero voluptates voluptatibus quisquam illo deserunt totam sunt porro quidem sequi ea?
Reprehenderit, dolore? Consequuntur, illum officia hic vel quasi minima quo temporibus nesciunt quisquam eum non porro sed aliquid, explicabo accusamus quam provident reprehenderit mollitia quia officiis sunt quaerat ut iusto.
Vero asperiores voluptate eos commodi eaque aspernatur molestiae dolorem quae necessitatibus, ab cumque atque officiis in sequi exercitationem blanditiis maiores accusamus facere reprehenderit voluptatibus enim totam? Labore fuga non vel.
Earum voluptatem, fuga hic quo quasi nam reiciendis dolore, autem maiores nisi placeat dolores totam labore ad odio doloremque a accusantium aspernatur et cupiditate cumque eos. Quam repellendus assumenda quidem.
Error repudiandae aspernatur enim sit unde dolores sequi voluptatibus earum quas veniam ipsum aliquam qui natus expedita officiis amet, non quibusdam voluptatem. Et molestias, temporibus sed similique iste quia esse.
Enim temporibus deleniti sapiente? Natus, aperiam eius quaerat ipsum nam magni vel dignissimos quo quia molestiae ex facere accusantium fuga placeat dolores reiciendis eos aut delectus et rerum, consectetur molestias.
Cupiditate dicta, quae consequuntur voluptatibus repellendus blanditiis eos reiciendis omnis quidem vitae voluptates, ratione reprehenderit optio ex culpa sunt iure delectus ab soluta ea, voluptas ut nihil. Quidem, ea esse!
Accusamus nulla quae quidem pariatur harum magni eius consequatur incidunt. Iste possimus ea nisi nesciunt atque reiciendis aperiam earum, nobis debitis optio quod, ab quam animi maiores repudiandae dignissimos. Magnam?
Voluptatum obcaecati reprehenderit eius consequatur aliquid ducimus eos exercitationem molestias. Rerum, similique eligendi harum dolor, distinctio autem dolores obcaecati fuga eius, officiis ducimus nobis expedita saepe non cum veniam sequi?
Rerum debitis error, hic, sapiente iure saepe culpa ipsum tenetur tempore, perferendis beatae expedita natus esse quibusdam! Minus natus, nemo vero suscipit veritatis expedita delectus nam corrupti, eligendi placeat maxime.
Repudiandae officiis doloremque consequatur, quas eligendi et atque placeat, architecto sint facilis sequi. Modi, ex doloremque sint inventore harum praesentium, dignissimos sit adipisci officiis alias, ullam eligendi ipsam! Vel, culpa.
Eum quam numquam aspe

*/

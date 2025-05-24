import { useParams } from 'react-router-dom';
import { fetchEventById } from '../../API/fetchEventById';
import eventImg from '../../assets/pictures/event.png';
import NavBar from '../../components/NavBar/NavBar';
import PageHeader from '../../components/PageHeader/PageHeader';

function SingleEventPage() {
	const { eventId } = useParams();

	const { fetchedEvent, loading, error } = fetchEventById(eventId);

	return (
		<section className="page page-single-event">
			<NavBar />
			<PageHeader className="section__title" text={fetchedEvent.title} />
		</section>
	);
}

export default SingleEventPage;

// ========= EXEMPEL DATA ===========
// {
// 	id: 1,
// 	title: 'DJ Kväll med DJ exempel',
// 	date: '2025-06-14',
// 	startTime: '20:00',
// 	endTime: '01:00',
// 	shortDescription: 'Dans och cocktails hela kvällen!',
// 	longDescription: 'long desc',
// 	type: 'dj',
// 	image: '/src/assets/pictures/event.png',
// },
// {
// 	id: 2,
// 	title: 'Vinkväll: Tema Frankrike',
// 	date: '2025-06-20',
// 	startTime: '18:00',
// 	endTime: '22:00',
// 	shortDescription: 'Fyra viner + ostbricka.',
// 	longDescription: 'long desc',
// 	type: 'wine',
// 	image: '/src/assets/pictures/event.png',
// },
// {
// 	id: 3,
// 	title: 'Abonnerat för privat fest',
// 	date: '2025-06-22',
// 	startTime: '17:00',
// 	endTime: '23:00',
// 	shortDescription: 'Restaurangen är abonnerad hela kvällen.',
// 	longDescription: 'long desc',
// 	type: 'private',
// 	image: '/src/assets/pictures/event.png',
// },

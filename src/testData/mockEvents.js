import { image } from 'framer-motion/client';

// mockEvents.js
export const events = [
	{
		id: 1,
		title: 'DJ Kväll med DJ exempel',
		date: '2025-06-14',
		startTime: '20:00',
		endTime: '01:00',
		description: 'Dans och cocktails hela kvällen!',
		type: 'dj',
		image: '/src/assets/pictures/event.png',
	},
	{
		id: 2,
		title: 'Vinkväll: Tema Frankrike',
		date: '2025-06-20',
		startTime: '18:00',
		endTime: '22:00',
		description: 'Fyra viner + ostbricka.',
		type: 'wine',
		image: '/src/assets/pictures/event.png',
	},
	{
		id: 3,
		title: 'Abonnerat för privat fest',
		date: '2025-06-22',
		startTime: '17:00',
		endTime: '23:00',
		description: 'Restaurangen är abonnerad hela kvällen.',
		type: 'private',
		image: '/src/assets/pictures/event.png',
	},
];

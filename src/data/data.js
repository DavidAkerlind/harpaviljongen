export const weeklyWine = {
	title: 'VECKANS VINER',

	description: '',

	type: 'wine',

	price: 165,

	items: [
		{
			title: 'Rioja Blanco Las Laventadas',
			producer: 'Javier San Pedro',
			description:
				'Friskt vin med smak av stenfrukter och florala inslag. Perfekt till charkbrickan eller vår magiska Toast Skagen.',
			price: '',
		},
		{
			title: 'Lux Fortis Cabernet Sauvignon',
			producer: 'Famille Fabre',
			description:
				'Smak av mörk frukt och kryddiga toner med silkeslena tanniner. Paras gärna med helgens hedersgäst: Steak Minute.',
			price: '',
		},
		{
			title: 'Claret A La Fraîche',
			producer: 'Pauline Lapierre',
			description:
				'Josigt och fräscht med smak av röda frukter och bär. Perfekt att drickas sval i solen och funkar utmärkt med vår Oxtartar.',
			price: '',
		},
	],
};
export const weeklyLunch = {
	title: 'VECKANS LUNCH',
	description: `Serveras tisdag till söndag mellan 11:00 och 15:00`,
	type: 'lunch',
	price: '',
	items: [
		{
			title: 'Klassiska köttbullar',
			description: 'Pessgurka, rårörda lingon, gräddsås & potatispuré',
			price: 165,
		},
		{
			title: 'Räksallad',
			description:
				'Handskalade räkor, ägg, gröna blad, krutonger, rädisor, tomat & citronmajonäs',
			price: 165,
		},
		{
			title: 'Reuben sandwich',
			description:
				'Levainbröd, pastrami, lagrad ost, surkål, reubensås & pickles',
			price: 165,
		},
	],
};
export const menuAlways = {
	title: 'ALLTID PÅ MENYN',
	description: '',
	type: 'all',
	price: '',
	items: [
		{
			title: 'Toast Skagen',
			description:
				'Handskalade räkor, smörstekt levain från Två systrars bageri',
			price: 235,
		},
		{
			title: 'Oxtartar',
			description: 'Pepparrotskräm, jordärtskocka & pommes',
			price: 235,
		},
		{
			title: 'Burrata sallad',
			description: 'Burrata, kronärtskocka, tomater, variation av grönt',
			price: 225,
		},
	],
};

export const menuSweet = {
	title: 'DET SÖTA',

	description: '',

	type: 'sweets',
	price: '',

	items: [
		{
			title: 'Varm bulle med glass',
			description:
				'Ert val av av kanel eller vaniljbulle gräddas i ugn och toppas med en kula vaniljglass',
			price: 80,
		},
		{
			title: 'Blåbärsruta',
			description: 'Blåbärspudding & citronsmetana',
			price: 40,
		},
		{
			title: 'Sorbet toppat med bubblor',
			description: '',
			price: 90,
		},
		{
			title: 'Glass i olika smaker',
			description: 'Fråga om dagens smaker',
			price: 45,
		},
	],
};

export const menuSnacks = {
	title: 'SNACKS',

	description: '',

	type: 'small snack',
	price: '',

	items: [
		{
			title: 'Västerbotten krokett',
			description: '',
			price: 69,
		},
		{
			title: 'Serrano krokett',
			description: '',
			price: 69,
		},
		{
			title: 'Charkuterier',
			description: '',
			price: 69,
		},
		{
			title: 'Ostar',
			description: '',
			price: 69,
		},
		{
			title: 'Oliver',
			description: '',
			price: 59,
		},
		{
			title: 'Cornichons med smetana & honung',
			description: '',
			price: 59,
		},
		{
			title: 'Surdegsbröd, smör',
			description: '',
			price: 59,
		},
		{
			title: 'Marconamandlar',
			description: '',
			price: 59,
		},
		{
			title: 'Chips med havssalt',
			description: '',
			price: 39,
		},
	],
};

export const openingHours = [
	{ day: 'Måndag', hours: 'Stängt' },
	{ day: 'Tisdag', hours: '11:00 - sent' },
	{ day: 'Onsdag', hours: '11:00 - sent' },
	{ day: 'Torsdag', hours: '11:00 - sent' },
	{ day: 'Fredag', hours: '11:00 - sent' },
	{ day: 'Lördag', hours: '11:00 - sent' },
	{ day: 'Söndag', hours: '11:00 - sent' },
];

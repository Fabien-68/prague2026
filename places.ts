import type { Place } from '../types';

export const allPlaces: Place[] = [
  // Essentiels
  {
    id: '1',
    category: 'Essentiel',
    name: 'Château de Prague',
    address: 'Hradcany, Prague 1, Czechia',
    description: `🏰 Symbole de Prague et panorama sur la Vltava.
Conseil : venir tôt le matin pour la lumière dorée.
— Prague · Fabien & Amanda · janvier 2026`,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=50.0909,14.4013',
    coordinates: { lat: 50.0909, lng: 14.4013 },
  },
  {
    id: '2',
    category: 'Essentiel',
    name: 'Pont Charles',
    address: 'Karluv most, Prague 1, Czechia',
    description: `🌉 Pont médiéval reliant les deux rives.
Conseil : à l’aube, la brume crée une atmosphère magique.
— Prague · Fabien & Amanda · janvier 2026`,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=50.0865,14.4118',
    coordinates: { lat: 50.0865, lng: 14.4118 },
  },
  {
    id: '3',
    category: 'Essentiel',
    name: 'Vieille Ville & Horloge',
    address: 'Staromestske namesti, Prague 1, Czechia',
    description: `🕰️ Place baroque et horloge du XVe siècle.
Conseil : arrivez avant l’heure pleine pour voir le mécanisme.
— Prague · Fabien & Amanda · janvier 2026`,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=50.0874,14.4214',
    coordinates: { lat: 50.0874, lng: 14.4214 },
  },
  {
    id: '4',
    category: 'Essentiel',
    name: 'Cathédrale Saint-Guy',
    address: 'III. nadvori 48/2, Prague Castle, Prague 1, Czechia',
    description: `⛪ Vitraux sublimes et nef impressionnante.
Conseil : observez la lumière traverser les vitraux en matinée.
— Prague · Fabien & Amanda · janvier 2026`,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=50.0909,14.4005',
    coordinates: { lat: 50.0909, lng: 14.4005 },
  },
  {
    id: '5',
    category: 'Balade',
    name: 'Quartier Malá Strana',
    address: 'Mala Strana, Prague 1, Czechia',
    description: `🏘️ Maisons pastel et ruelles pavées.
Conseil : explorez-le au crépuscule main dans la main.
— Prague · Fabien & Amanda · janvier 2026`,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=50.0881,14.4036',
    coordinates: { lat: 50.0881, lng: 14.4036 },
  },
  {
    id: '6',
    category: 'Parc',
    name: 'Île Kampa',
    address: 'Kampa Island, Prague 1, Czechia',
    description: `🌿 Petite île paisible au bord de la Vltava.
Conseil : pause photo au bord de l’eau.
— Prague · Fabien & Amanda · janvier 2026`,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=50.0847,14.4093',
    coordinates: { lat: 50.0847, lng: 14.4093 },
  },
    {
    id: '27',
    category: 'Essentiel',
    name: 'Hôtel Leon D’Oro',
    address: 'Havelská 29, Prague 1, Czechia',
    description: `🏨 POINT DE DÉPART
Point central de votre séjour, idéalement situé entre la Vieille Ville et le Pont Charles.
— Prague · Fabien & Amanda · janvier 2026`,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=50.0857,14.4221',
    coordinates: { lat: 50.0857, lng: 14.4221 },
  },
  // Vues & Panoramas
  {
    id: '7',
    category: 'Panorama',
    name: 'Vue panoramique Letná',
    address: 'Letenske sady viewpoint, Prague 7, Czechia',
    description: `📸 Vue iconique sur les ponts.
Conseil : lumière rasante superbe en fin d’après-midi.
— Prague · Fabien & Amanda · janvier 2026`,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=50.0933,14.4151',
    coordinates: { lat: 50.0933, lng: 14.4151 },
  },
  {
    id: '8',
    category: 'Panorama',
    name: 'Ponts de la Vltava',
    address: 'Smetanovo nabrezi, Prague 1, Czechia',
    description: `🌁 Perspective parfaite sur le pont Charles.
Conseil : idéal au bleu du soir.
— Prague · Fabien & Amanda · janvier 2026`,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=50.0847,14.4135',
    coordinates: { lat: 50.0847, lng: 14.4135 },
  },
  {
    id: '12',
    category: 'Panorama',
    name: 'Coucher de soleil Petrin Hill',
    address: 'Petrinske sady, Prague 1, Czechia',
    description: `🌅 Parc boisé dominant la ville.
Conseil : moment romantique au crépuscule.
— Prague · Fabien & Amanda · janvier 2026`,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=50.0818,14.3973',
    coordinates: { lat: 50.0818, lng: 14.3973 },
  },
   {
    id: '22',
    category: 'Parc',
    name: 'Letná Park',
    address: 'Letenske sady, Prague 7, Czechia',
    description: `🌇 Vue panoramique sur les ponts.
Conseil : coucher de soleil superbe, bonnet obligatoire !
— Prague · Fabien & Amanda · janvier 2026`,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=50.0961,14.4156',
    coordinates: { lat: 50.0961, lng: 14.4156 },
  },
  // Balades
  {
    id: '11',
    category: 'Balade',
    name: 'Ruelles de Nový Svět',
    address: 'Novy Svet, Prague 1, Czechia',
    description: `🕯️ Ruelles minuscules derrière le château.
Conseil : balade silencieuse au lever du jour.
— Prague · Fabien & Amanda · janvier 2026`,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=50.0913,14.3919',
    coordinates: { lat: 50.0913, lng: 14.3919 },
  },
  {
    id: '13',
    category: 'Balade',
    name: 'Balade du matin – Vieille Ville & lumière d’hiver',
    address: 'Havelská 29, Prague 1, Czechia',
    description: `☀️ Itinéraire : Hôtel Leon D’Oro → Horloge → Pont Charles → Île Kampa → Café Deer.
Durée : env. 1h45 avec pauses.
Conseil : profiter des reflets sur la Vltava.
— Prague · Fabien & Amanda · janvier 2026`,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=50.0857,14.4221',
    coordinates: { lat: 50.0857, lng: 14.4221 },
  },
  {
    id: '14',
    category: 'Balade',
    name: 'Balade du soir – Rives & toits de Prague',
    address: 'Havelská 29, Prague 1, Czechia',
    description: `🌙 Itinéraire : Hôtel Leon D’Oro → Náplavka → Letná Park → Lucerna Rooftop.
Durée : env. 2h avec vues et reflets sur la ville.
Conseil : terminer la journée sur les hauteurs.
— Prague · Fabien & Amanda · janvier 2026`,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=50.0857,14.4221',
    coordinates: { lat: 50.0857, lng: 14.4221 },
  },
  {
    id: '26',
    category: 'Balade',
    name: 'Náplavka',
    address: 'Rasinovo nabrezi, Prague 2, Czechia',
    description: `🚶 Quais sous les ponts, reflets d’hiver sur la Vltava.
Conseil : balade tranquille même par froid sec.
— Prague · Fabien & Amanda · janvier 2026`,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=50.0713,14.4158',
    coordinates: { lat: 50.0713, lng: 14.4158 },
  },
   // Restaurants / Cafés
  {
    id: '15',
    category: 'Restaurant',
    name: 'Eska',
    address: 'Pernerova 49, Prague 8, Czechia',
    description: `🥖 Cuisine tchèque moderne et four à pain artisanal. Ambiance industrielle chic à Karlín.
Conseil : excellent brunch et pain maison.
— Prague · Fabien & Amanda · janvier 2026`,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=50.0913,14.4561',
    coordinates: { lat: 50.0913, lng: 14.4561 },
    link: 'https://guide.michelin.com/en/prague-region/prague/restaurant/eska',
    price: '25–40 €'
  },
  {
    id: '16',
    category: 'Restaurant',
    name: 'Kantýna',
    address: 'Politickych veznu 5, Prague 1, Czechia',
    description: `🍽️ Cantine haut de gamme centrée sur la viande locale maturée sur place.
Conseil : service rapide et savoureux.
— Prague · Fabien & Amanda · janvier 2026`,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=50.0825,14.4283',
    coordinates: { lat: 50.0825, lng: 14.4283 },
    link: 'https://maps.app.goo.gl/4V4ZXmQp79Vq6Pog9',
    price: '20–35 €'
  },
  {
    id: '17',
    category: 'Café',
    name: 'Mensa (Vnitroblock)',
    address: 'Tusarova 791/31, Prague 7, Czechia',
    description: `🥗 Café-bistrot créatif et lumineux dans le quartier de Holešovice.
Conseil : parfait pour une pause légère entre deux visites.
— Prague · Fabien & Amanda · janvier 2026`,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=50.1042,14.4520',
    coordinates: { lat: 50.1042, lng: 14.4520 },
    link: 'https://maps.app.goo.gl/DV3h2KnW9CY3ZfK89',
    price: '10–20 €'
  },
  {
    id: '18',
    category: 'Café',
    name: 'Café Savoy',
    address: 'Vitezna 5, Prague 1, Czechia',
    description: `🥐 Institution historique à l’esprit Belle Époque.
Conseil : chocolat chaud et brunch copieux sous les moulures dorées.
— Prague · Fabien & Amanda · janvier 2026`,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=50.0822,14.4079',
    coordinates: { lat: 50.0822, lng: 14.4079 },
    link: 'https://guide.michelin.com/en/prague-region/prague/restaurant/cafe-savoy',
    price: '20–35 €'
  },
  {
    id: '19',
    category: 'Café',
    name: 'Můj Šálek Kávy',
    address: 'Krizikova 105, Prague 8, Czechia',
    description: `☕ Torréfaction de référence du café de spécialité à Karlín.
Conseil : atmosphère cosy et douce lumière d’hiver.
— Prague · Fabien & Amanda · janvier 2026`,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=50.0911,14.4501',
    coordinates: { lat: 50.0911, lng: 14.4501 },
    link: 'https://maps.app.goo.gl/kKjMZPWTU9AWty6t8',
    price: '8–15 €'
  },
  {
    id: '20',
    category: 'Restaurant',
    name: 'V Kolkovně',
    address: 'V Kolkovne 8, Prague 1, Czechia',
    description: `🍲 Brasserie tchèque conviviale et authentique.
Conseil : parfait pour goûter les plats locaux dans une ambiance vivante.
— Prague · Fabien & Amanda · janvier 2026`,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=50.0894,14.4211',
    coordinates: { lat: 50.0894, lng: 14.4211 },
    link: 'https://maps.app.goo.gl/j53o1tC8d3MEAV6g6',
    price: '15–25 €'
  },
    {
    id: '24',
    category: 'Café',
    name: 'One Sip Coffee',
    address: 'Hastalska 755/15, Prague 1, Czechia',
    description: `☕ Micro‑café minimaliste.
Conseil : halte idéale après la Vieille Ville.
— Prague · Fabien & Amanda · janvier 2026`,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=50.0908,14.4246',
    coordinates: { lat: 50.0908, lng: 14.4246 },
  },
  // Culture & Découvertes
  {
    id: '21',
    category: 'Musée',
    name: 'Kunsthalle Praha',
    address: 'Klarov 5, Prague 1, Czechia',
    description: `🎨 Musée d’art contemporain dans une ancienne centrale.
Conseil : halte au chaud pour découvrir les expos du moment.
— Prague · Fabien & Amanda · janvier 2026`,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=50.0903,14.4103',
    coordinates: { lat: 50.0903, lng: 14.4103 },
  },
  {
    id: '23',
    category: 'Boutique',
    name: 'Perníčkův Sen',
    address: 'Hastalska 757/21, Prague 1, Czechia',
    description: `🍪 Boutique artisanale de pain d’épices.
Conseil : sentez les épices avant d’entrer.
— Prague · Fabien & Amanda · janvier 2026`,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=50.0908,14.4253',
    coordinates: { lat: 50.0908, lng: 14.4253 },
  },
  {
    id: '25',
    category: 'Art',
    name: 'Lennon Wall',
    address: 'Velkoprevorske namesti, Prague 1, Czechia',
    description: `🧱 Mur coloré, symbole de paix.
Conseil : à visiter tôt ou au crépuscule.
— Prague · Fabien & Amanda · janvier 2026`,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=50.0863,14.4063',
    coordinates: { lat: 50.0863, lng: 14.4063 },
  },
    // NOUVEAUX LIEUX INSOLITES
  {
    id: '28',
    category: 'Art',
    name: 'Sculptures de David Černý',
    address: 'Prague, Czechia',
    description: `Un parcours artistique unique à travers Prague. Admirez ses œuvres emblématiques comme le Cheval à l'envers dans le passage Lucerna, les Bébés rampants de la tour de Žižkov, ou la Tête mouvante de Kafka — des installations à la fois étranges et fascinantes.`,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=50.0818,14.4221', // Tête de Kafka
    coordinates: { lat: 50.0818, lng: 14.4221 },
  },
  {
    id: '29',
    category: 'Activité',
    name: 'Le théâtre noir de Prague',
    address: 'Prague, Czechia',
    description: `Un spectacle mythique mêlant illusions lumineuses, danse et arts visuels dans l'obscurité totale. Expérience visuelle déroutante et typiquement pragoise.`,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Théâtre+noir+de+Prague',
    coordinates: { lat: 50.083, lng: 14.42 }, // Coordonnées approximatives du centre
  },
  {
    id: '30',
    category: 'Insolite',
    name: 'La Caverne Magique de Petřín',
    address: 'Petřín Hill, Prague, Czechia',
    description: `Galerie souterraine psychédélique d'un artiste fantasque, Reon Argondian, évoquant un monde chimérique peuplé de créatures et de couleurs surréalistes.`,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=50.0818,14.3973',
    coordinates: { lat: 50.0818, lng: 14.3973 },
  },
  {
    id: '31',
    category: 'Lieu Secret',
    name: 'Speculum Alchemiae',
    address: 'Haštalská 1, 110 00 Staré Město, Czechia',
    description: `Un véritable laboratoire d'alchimiste du XVIe siècle redécouvert par hasard sous les ruelles de la Vieille Ville. Visite fascinante et chargée d'histoire.`,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=50.0913,14.4233',
    coordinates: { lat: 50.0913, lng: 14.4233 },
  },
  {
    id: '32',
    category: 'Lieu Secret',
    name: 'Le mur du jardin Wallenstein',
    address: 'Valdštejnská zahrada, Prague, Czechia',
    description: `Un trompe-l'œil baroque dissimulant des visages et figures d'animaux dans la pierre. Jeu d'observation amusant et poétique.`,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=50.0911,14.4087',
    coordinates: { lat: 50.0911, lng: 14.4087 },
  },
  {
    id: '33',
    category: 'Balade',
    name: 'Cimetière de Vyšehrad',
    address: 'Vyšehrad, Prague, Czechia',
    description: `Un lieu paisible et émouvant où reposent Dvořák, Mucha ou Neruda, parfait pour une balade hors du temps.`,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=50.0645,14.4187',
    coordinates: { lat: 50.0645, lng: 14.4187 },
  },
  {
    id: '34',
    category: 'Panorama',
    name: 'Tour astronomique du Clementinum',
    address: 'Klementinum, Prague, Czechia',
    description: `Moins connue que celle de l'Hôtel de Ville, elle offre l'une des plus belles vues sur Prague, surtout au coucher du soleil.`,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=50.0864,14.4162',
    coordinates: { lat: 50.0864, lng: 14.4162 },
  },
  {
    id: '35',
    category: 'Restaurant',
    name: 'Toit du restaurant CODA',
    address: 'Tržiště 368/9, 118 00 Malá Strana, Czechia',
    description: `Dîner gastronomique avec vue panoramique sur les toits de Malá Strana, entouré d'assiettes caricaturales dessinées par Josef Blecha.`,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=50.0883,14.4022',
    coordinates: { lat: 50.0883, lng: 14.4022 },
  },
  {
    id: '36',
    category: 'Panorama',
    name: 'Tour de télévision de Žižkov',
    address: 'Mahlerovy sady 1, 130 00 Praha 3-Žižkov, Czechia',
    description: `Architecture futuriste surmontée de bébés géants — meilleur panorama urbain garanti.`,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=50.0809,14.4514',
    coordinates: { lat: 50.0809, lng: 14.4514 },
  },
  {
    id: '37',
    category: 'Activité',
    name: 'Beer Spa',
    address: 'Prague, Czechia',
    description: `Bains à la bière tchèque, combinant relaxation et dégustation — une expérience sensorielle unique à Prague.`,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Beer+Spa+Prague',
    coordinates: { lat: 50.088, lng: 14.425 }, // Coordonnées approximatives
  },
  {
    id: '38',
    category: 'Activité',
    name: 'Kafe & Hrnky',
    address: 'Prague, Czechia',
    description: `Atelier-café où l'on peut peindre sa propre tasse en céramique avant cuisson. Parfait souvenir créatif.`,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Kafe+Hrnky+Prague',
    coordinates: { lat: 50.076, lng: 14.44 }, // Coordonnées approximatives
  },
  {
    id: '39',
    category: 'Activité',
    name: 'Mini-golf fluorescent (Glow Golf)',
    address: 'Opatovická 160/18, 110 00 Nové Město, Czechia',
    description: `Parcours de 19 trous dans le noir sous lumière UV, fun et insolite.`,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=50.0801,14.4179',
    coordinates: { lat: 50.0801, lng: 14.4179 },
  },
  {
    id: '40',
    category: 'Activité',
    name: 'Paddle sur la Vltava',
    address: 'Vltava River, Prague, Czechia',
    description: `Découvrir les monuments de Prague directement depuis l'eau, dans un calme presque irréel.`,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Paddle+board+Vltava+Prague',
    coordinates: { lat: 50.075, lng: 14.415 }, // Coordonnées approximatives
  },
  {
    id: '41',
    category: 'Musée',
    name: 'Maison À l\'Anneau d\'Or',
    address: 'Týnská 6, 110 00 Staré Město, Czechia',
    description: `Musée discret retraçant l'histoire médiévale de Prague à travers des décors immersifs.`,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=50.0883,14.4230',
    coordinates: { lat: 50.0883, lng: 14.4230 },
  },
  {
    id: '42',
    category: 'Musée',
    name: 'DOX Centre for Contemporary Art',
    address: 'Poupětova 1, 170 00 Praha 7-Holešovice, Czechia',
    description: `Immense espace d'art contemporain installé dans une ancienne usine, souvent ignoré par les touristes.`,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=50.1046,14.4491',
    coordinates: { lat: 50.1046, lng: 14.4491 },
  },
  {
    id: '43',
    category: 'Insolite',
    name: 'Manifesto Market',
    address: 'Anděl, Prague, Czechia',
    description: `Village éphémère en containers mêlant gastronomie, design et concerts. Lieu branché et sans argent liquide.`,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Manifesto+Market+Anděl+Prague',
    coordinates: { lat: 50.0725, lng: 14.4044 },
  },
   {
    id: '10',
    category: 'Insolite',
    name: 'Tram nostalgique',
    address: 'Namesti Republiky tram stop, Prague 1, Czechia',
    description: `🚋 Vieux tramway historique.
Conseil : photos rétro garanties.
— Prague · Fabien & Amanda · janvier 2026`,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=50.0890,14.4281',
    coordinates: { lat: 50.089, lng: 14.4281 },
  },
  {
    id: '9',
    category: 'Activité',
    name: 'Patinoire Ovocný trh',
    address: 'Ovocny trh, Prague 1, Czechia',
    description: `⛸️ Patinage en plein air au cœur de la ville.
Conseil : ambiance féérique en hiver.
— Prague · Fabien & Amanda · janvier 2026`,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=50.0863,14.4243',
    coordinates: { lat: 50.0863, lng: 14.4243 },
  },
];
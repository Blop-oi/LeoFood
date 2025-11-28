// Coordonnées des campus ESILV
const CAMPUS_COORDS = {
  laDefense:   { lat: 48.8925, lng: 2.2369, label: "ESILV – Paris La Défense" },
  nanterre:    { lat: 48.9005, lng: 2.2120, label: "ESILV – Nanterre" },
  nantes:      { lat: 47.2820, lng: -1.5210, label: "ESILV – Nantes" },
  montpellier: { lat: 43.6370, lng: 3.8400, label: "ESILV – Montpellier" }
};

// Tableau restaurants : ajoute ici toutes tes entrées
let restaurants = [
  // EXEMPLES pour La Défense (à compléter jusqu’à ~20)
    {
    id: 1,
    name: "Cafétéria Pôle Léonard de Vinci",
    address: "12 avenue Léonard de Vinci, 92400 Courbevoie",
    description: "Cafétéria du Pôle avec plats du jour, snacks et options rapides.",
    price: 8,
    travelTime: 3,
    tags: ["ru", "pasCher", "rapide"],
    allergiesNotes: "Allergènes indiqués sur place.",
    optimalMenu: "Plat du jour + dessert simple pour rester dans un petit budget.",
    author: "Promo 2023",
    campus: "laDefense",
    lat: 48.8925,
    lng: 2.2369,
    feedback: [],
    questions: []
  },
  {
    id: 2,
    name: "Friends & Fries La Défense",
    address: "Centre Commercial Westfield Les 4 Temps, 92800 Puteaux",
    description: "Burgers et frites maison dans le centre commercial, pratique pour un midi rapide.",
    price: 11,
    travelTime: 10,
    tags: ["fastFood", "pasCher", "rapide"],
    allergiesNotes: "Gluten, lait et oeufs dans la plupart des burgers.",
    optimalMenu: "Burger classique + frites petites si tu as moins de 45 minutes.",
    author: "Ancien ESILV",
    campus: "laDefense",
    lat: 48.8920,
    lng: 2.2380,
    feedback: [],
    questions: []
  },
  {
    id: 3,
    name: "Hanoi Cà Phê La Défense",
    address: "Parvis de La Défense, 92800 Puteaux",
    description: "Cuisine vietnamienne type street‑food, bo bun et pho sur place ou à emporter.",
    price: 13,
    travelTime: 8,
    tags: ["sandwicherie", "rapide", "aEmporter"],
    allergiesNotes: "Soja, arachides et coriandre fréquents, demander une adaptation si besoin.",
    optimalMenu: "Bo bun au bœuf sans cacahuètes si tu as des allergies.",
    author: "Promo 2024",
    campus: "laDefense",
    lat: 48.8912,
    lng: 2.2395,
    feedback: [],
    questions: []
  },
  {
    id: 4,
    name: "DS Café Cours Michelet",
    address: "Cours Michelet, 92800 Puteaux",
    description: "Bowls, salades et plats healthy avec options végétariennes et sans gluten.",
    price: 16,
    travelTime: 8,
    tags: ["cafe", "bio", "vegetarien", "sansGluten", "cool"],
    allergiesNotes: "Nombreux plats sans viande et sans gluten, à préciser à la commande.",
    optimalMenu: "Bowl veggie + boisson chaude si tu veux un repas léger mais complet.",
    author: "Promo 2022",
    campus: "laDefense",
    lat: 48.8921,
    lng: 2.2401,
    feedback: [],
    questions: []
  },
  {
    id: 5,
    name: "Noodle Bar La Défense",
    address: "Centre Commercial Westfield Les 4 Temps, 92800 Puteaux",
    description: "Nouilles sautées et woks personnalisables préparés devant toi.",
    price: 12,
    travelTime: 10,
    tags: ["fastFood", "rapide", "aEmporter"],
    allergiesNotes: "Sauces soja (gluten) et fruits à coque possibles dans certains plats.",
    optimalMenu: "Wok légumes + poulet avec sauce légère si tu veux éviter le gras.",
    author: "Tuteur A2",
    campus: "laDefense",
    lat: 48.8923,
    lng: 2.2383,
    feedback: [],
    questions: []
  },
  {
    id: 6,
    name: "Yuki Ono CNIT",
    address: "CNIT, 2 Place de La Défense, 92053 Paris La Défense",
    description: "Spécialités japonaises (bento, sushi) dans le CNIT.",
    price: 14,
    travelTime: 9,
    tags: ["sandwicherie", "aEmporter", "rapide"],
    allergiesNotes: "Poisson cru, soja et sésame dans la plupart des plats.",
    optimalMenu: "Bento au saumon + soupe miso pour un repas complet.",
    author: "Promo 2021",
    campus: "laDefense",
    lat: 48.8928,
    lng: 2.2389,
    feedback: [],
    questions: []
  },
  {
    id: 7,
    name: "McDonald's La Défense",
    address: "Centre Commercial Westfield Les 4 Temps, 92800 Puteaux",
    description: "Classique fast‑food, ouvert en continu pour des repas rapides.",
    price: 9,
    travelTime: 9,
    tags: ["fastFood", "pasCher", "rapide", "aEmporter"],
    allergiesNotes: "Gluten, lait, arachides possibles, consulter les tableaux d’allergènes.",
    optimalMenu: "Menu wrap + petite frite si tu veux limiter la quantité.",
    author: "Promo 2020",
    campus: "laDefense",
    lat: 48.8924,
    lng: 2.2385,
    feedback: [],
    questions: []
  },
  {
    id: 8,
    name: "KFC La Défense",
    address: "Esplanade Charles de Gaulle, 92800 Puteaux",
    description: "Poulet frit et menus étudiants, pratique pour un repas rapide.",
    price: 10,
    travelTime: 10,
    tags: ["fastFood", "pasCher", "rapide"],
    allergiesNotes: "Gluten dans les panures, huiles de friture partagées.",
    optimalMenu: "Menu tenders + boisson, mangeable en moins de 30 minutes.",
    author: "Promo 2025",
    campus: "laDefense",
    lat: 48.8916,
    lng: 2.2412,
    feedback: [],
    questions: []
  },
  {
    id: 9,
    name: "Pret A Manger La Défense",
    address: "Parvis de La Défense, 92800 Puteaux",
    description: "Sandwichs, salades et soupes prêtes à emporter.",
    price: 10,
    travelTime: 7,
    tags: ["sandwicherie", "aEmporter", "rapide", "vegetarien"],
    allergiesNotes: "Allergènes affichés, plusieurs options végétariennes.",
    optimalMenu: "Soupe + sandwich veggie si tu veux manger léger.",
    author: "Ancien ESILV",
    campus: "laDefense",
    lat: 48.8918,
    lng: 2.2375,
    feedback: [],
    questions: []
  },
  {
    id: 10,
    name: "Pizzeria Express La Défense",
    address: "Rue de Valmy, 92800 Puteaux",
    description: "Pizzas à la part et boissons, très rapide entre deux cours.",
    price: 7,
    travelTime: 7,
    tags: ["fastFood", "pasCher", "aEmporter"],
    allergiesNotes: "Gluten et lactose dans la plupart des pizzas.",
    optimalMenu: "Deux parts de pizza + eau pour un repas express.",
    author: "Promo 2023",
    campus: "laDefense",
    lat: 48.8919,
    lng: 2.2372,
    feedback: [],
    questions: []
  },
  {
    id: 11,
    name: "La Salle à Manger",
    address: "Parvis de La Défense, 92800 Puteaux",
    description: "Restaurant solidaire et convivial à proximité des bureaux.",
    price: 12,
    travelTime: 6,
    tags: ["brasserie", "cool", "bio"],
    allergiesNotes: "Cuisine maison, allergènes indiqués sur la carte.",
    optimalMenu: "Plat du jour + eau carafe pour rester dans le budget.",
    author: "Tuteur ESILV",
    campus: "laDefense",
    lat: 48.8926,
    lng: 2.2387,
    feedback: [],
    questions: []
  },
  {
    id: 12,
    name: "Café Starbucks La Défense",
    address: "Parvis de La Défense, 92800 Puteaux",
    description: "Café, snacks sucrés et salés, idéal pour une pause au chaud.",
    price: 6,
    travelTime: 7,
    tags: ["cafe", "calme", "aEmporter"],
    allergiesNotes: "Boissons personnalisables, possibles sans lactose.",
    optimalMenu: "Latte + petit snack salé pour un encas rapide.",
    author: "Promo 2021",
    campus: "laDefense",
    lat: 48.8920,
    lng: 2.2392,
    feedback: [],
    questions: []
  },
  {
    id: 13,
    name: "Cœur de Blé La Défense",
    address: "Galerie commerciale RER, 92800 Puteaux",
    description: "Sandwicherie avec formules à emporter ou sur place.",
    price: 8,
    travelTime: 6,
    tags: ["sandwicherie", "pasCher", "rapide", "aEmporter"],
    allergiesNotes: "Gluten, lait, oeufs, à vérifier selon les recettes.",
    optimalMenu: "Formule sandwich + boisson pour un midi en déplacement.",
    author: "Promo 2024",
    campus: "laDefense",
    lat: 48.8927,
    lng: 2.2378,
    feedback: [],
    questions: []
  },
  {
    id: 14,
    name: "Hippopotamus La Défense",
    address: "12 parvis de La Défense, 92800 Puteaux",
    description: "Brasserie spécialisée dans la viande grillée.",
    price: 20,
    travelTime: 9,
    tags: ["brasserie", "cool", "terrasse"],
    allergiesNotes: "Viandes, sauces et desserts variés, allergènes indiqués.",
    optimalMenu: "Plat du jour grillade + accompagnement si tu as plus d’1 h.",
    author: "Promo 2020",
    campus: "laDefense",
    lat: 48.8914,
    lng: 2.2390,
    feedback: [],
    questions: []
  },
  {
    id: 15,
    name: "Vegan Bowl Défense",
    address: "Cours Valmy, 92800 Puteaux",
    description: "Bowls 100 % végétaux, idéal si tu es vegan.",
    price: 14,
    travelTime: 8,
    tags: ["vegan", "bio", "cool"],
    allergiesNotes: "Fruits à coque dans certains toppings, demander une version adaptée.",
    optimalMenu: "Bowl protéines végétales + céréales complètes pour tenir l’aprem.",
    author: "Promo 2025",
    campus: "laDefense",
    lat: 48.8922,
    lng: 2.2405,
    feedback: [],
    questions: []
  },
  {
    id: 16,
    name: "Tacos La Défense",
    address: "Rue de l’Abreuvoir, 92400 Courbevoie",
    description: "Tacos à la française, portions généreuses.",
    price: 9,
    travelTime: 12,
    tags: ["fastFood", "pasCher"],
    allergiesNotes: "Gluten, fromage et sauces riches.",
    optimalMenu: "Tacos simple viande si tu veux éviter de trop manger à midi.",
    author: "Ancien ESILV",
    campus: "laDefense",
    lat: 48.8950,
    lng: 2.2520,
    feedback: [],
    questions: []
  },
  {
    id: 17,
    name: "Sandwicherie Sans Porc Gambetta",
    address: "80 avenue Gambetta, 92400 Courbevoie",
    description: "Sandwichs et burgers avec options sans porc.",
    price: 10,
    travelTime: 13,
    tags: ["sandwicherie", "sansPorc", "pasCher", "rapide"],
    allergiesNotes: "Gluten et lait, vérifier les sauces.",
    optimalMenu: "Burger poulet sans bacon + boisson.",
    author: "Promo 2022",
    campus: "laDefense",
    lat: 48.8960,
    lng: 2.2555,
    feedback: [],
    questions: []
  },
  {
    id: 18,
    name: "Food‑truck Burger Parvis",
    address: "Parvis de La Défense, 92800 Puteaux",
    description: "Food‑truck occasionnel avec burgers maison.",
    price: 11,
    travelTime: 6,
    tags: ["foodTruck", "cool", "aEmporter"],
    allergiesNotes: "Gluten, lait et oeufs, recettes variables.",
    optimalMenu: "Burger du jour + boisson, parfait par beau temps.",
    author: "Etudiant A3",
    campus: "laDefense",
    lat: 48.8923,
    lng: 2.2382,
    feedback: [],
    questions: []
  },
  {
    id: 19,
    name: "Caféteria Entreprises Parvis",
    address: "Parvis de La Défense, 92800 Puteaux",
    description: "Self‑service dans un immeuble de bureaux, accessible le midi.",
    price: 10,
    travelTime: 8,
    tags: ["ru", "rapide", "calme"],
    allergiesNotes: "Buffet avec plats chauds et salades, allergènes indiqués.",
    optimalMenu: "Assiette chaude + légumes si tu veux manger équilibré.",
    author: "Promo 2023",
    campus: "laDefense",
    lat: 48.8919,
    lng: 2.2398,
    feedback: [],
    questions: []
  },
  {
    id: 20,
    name: "Café des Tours",
    address: "Esplanade du Général de Gaulle, 92800 Puteaux",
    description: "Café avec quelques plats simples, idéal pour un déjeuner au calme.",
    price: 15,
    travelTime: 9,
    tags: ["cafe", "calme", "terrasse"],
    allergiesNotes: "Carte courte, demander les détails au serveur.",
    optimalMenu: "Plat du jour + café si tu veux un déjeuner posé.",
    author: "Tuteur ESILV",
    campus: "laDefense",
    lat: 48.8917,
    lng: 2.2403,
    feedback: [],
    questions: []
  },
  {
    id: 101,
    name: "RU Paul Ricoeur",
    address: "Allée de l’Université, 92000 Nanterre",
    description: "Restaurant universitaire principal du campus, menus complets à tarif CROUS.",
    price: 4,
    travelTime: 5,
    tags: ["ru", "pasCher"],
    allergiesNotes: "Allergènes indiqués en salle, options végétariennes fréquentes.",
    optimalMenu: "Formule étudiante entrée + plat chaud pour un midi très économique.",
    author: "Étudiant Nanterre",
    campus: "nanterre",
    lat: 48.9045,
    lng: 2.2140,
    feedback: [],
    questions: []
  },
  {
    id: 102,
    name: "Cafétéria Bâtiment E",
    address: "200 avenue de la République, 92000 Nanterre",
    description: "Cafétéria du campus avec sandwiches, boissons et snacks.",
    price: 6,
    travelTime: 4,
    tags: ["ru", "sandwicherie", "rapide", "aEmporter"],
    allergiesNotes: "Sandwichs variés, allergènes affichés au comptoir.",
    optimalMenu: "Sandwich + boisson si tu as une heure de pause entre deux TD.",
    author: "Promo 2023",
    campus: "nanterre",
    lat: 48.9040,
    lng: 2.2130,
    feedback: [],
    questions: []
  },
  {
    id: 103,
    name: "Crous Brasserie Nanterre",
    address: "Allée de l’Université, 92000 Nanterre",
    description: "Brasserie gérée par le Crous avec quelques plats cuisinés à table.",
    price: 8,
    travelTime: 6,
    tags: ["ru", "brasserie", "pasCher"],
    allergiesNotes: "Allergènes indiqués sur la carte.",
    optimalMenu: "Plat du jour + salade si tu veux un peu plus de confort qu’au RU.",
    author: "Tuteur L3",
    campus: "nanterre",
    lat: 48.9052,
    lng: 2.2135,
    feedback: [],
    questions: []
  },
  {
    id: 104,
    name: "Subway Nanterre U",
    address: "Boulevard des Provinces Françaises, 92000 Nanterre",
    description: "Sandwichs personnalisables, pratique pour manger en marchant.",
    price: 9,
    travelTime: 8,
    tags: ["sandwicherie", "rapide", "aEmporter"],
    allergiesNotes: "Gluten et lait dans de nombreux produits, options veggies.",
    optimalMenu: "Sub 15 cm veggie + boisson pour un repas pas trop lourd.",
    author: "Promo 2024",
    campus: "nanterre",
    lat: 48.9065,
    lng: 2.2180,
    feedback: [],
    questions: []
  },
  {
    id: 105,
    name: "Casa Roma",
    address: "Boulevard des Provinces Françaises, 92000 Nanterre",
    description: "Pizzeria de quartier avec pâtes et salades.",
    price: 13,
    travelTime: 9,
    tags: ["brasserie", "cool", "terrasse"],
    allergiesNotes: "Gluten et fromage dans la majorité des plats.",
    optimalMenu: "Pizza margherita à partager si tu veux limiter le prix.",
    author: "Ancien ESILV",
    campus: "nanterre",
    lat: 48.9060,
    lng: 2.2190,
    feedback: [],
    questions: []
  },
  {
    id: 106,
    name: "Le Borsalino",
    address: "Place de la Boule, 92000 Nanterre",
    description: "Brasserie italienne avec pizzas et plats du jour.",
    price: 16,
    travelTime: 12,
    tags: ["brasserie", "cool"],
    allergiesNotes: "Gluten, lait, oeufs, peu d’options sans gluten.",
    optimalMenu: "Plat du jour + eau carafe si tu as un peu de temps.",
    author: "Promo 2022",
    campus: "nanterre",
    lat: 48.8995,
    lng: 2.2080,
    feedback: [],
    questions: []
  },
  {
    id: 107,
    name: "O’Kebab Nanterre U",
    address: "Avenue Pablo Picasso, 92000 Nanterre",
    description: "Kebab très fréquenté par les étudiants, ouvert tard.",
    price: 8,
    travelTime: 7,
    tags: ["fastFood", "pasCher", "rapide", "halal"],
    allergiesNotes: "Gluten dans le pain, lait dans certaines sauces.",
    optimalMenu: "Sandwich kebab + boisson, mangeable en moins de 30 minutes.",
    author: "Étudiant Nanterre",
    campus: "nanterre",
    lat: 48.9050,
    lng: 2.2125,
    feedback: [],
    questions: []
  },
  {
    id: 108,
    name: "Snack Sans Porc Picasso",
    address: "Avenue Pablo Picasso, 92000 Nanterre",
    description: "Snack proposant des burgers et sandwichs sans porc.",
    price: 9,
    travelTime: 7,
    tags: ["sandwicherie", "sansPorc", "rapide"],
    allergiesNotes: "Gluten et fromage, préciser les allergies au comptoir.",
    optimalMenu: "Burger poulet sans bacon + frite petite.",
    author: "Promo 2023",
    campus: "nanterre",
    lat: 48.9048,
    lng: 2.2115,
    feedback: [],
    questions: []
  },
  {
    id: 109,
    name: "Ô Tacos Nanterre",
    address: "Boulevard des Provinces Françaises, 92000 Nanterre",
    description: "Tacos à la française, portions généreuses pour gros appétits.",
    price: 9,
    travelTime: 9,
    tags: ["fastFood", "pasCher"],
    allergiesNotes: "Gluten, fromage et sauces riches.",
    optimalMenu: "Tacos taille M une viande pour éviter de t’endormir en TD.",
    author: "Promo 2021",
    campus: "nanterre",
    lat: 48.9062,
    lng: 2.2170,
    feedback: [],
    questions: []
  },
  {
    id: 110,
    name: "Le Comptoir du Campus",
    address: "Rue de l’Université, 92000 Nanterre",
    description: "Brasserie simple avec formule midi proche de l’université.",
    price: 14,
    travelTime: 6,
    tags: ["brasserie", "cool", "terrasse"],
    allergiesNotes: "Carte classique de brasserie, demander pour les sauces.",
    optimalMenu: "Plat du jour + café si tu as 1 h de pause.",
    author: "Tuteur L3",
    campus: "nanterre",
    lat: 48.9035,
    lng: 2.2145,
    feedback: [],
    questions: []
  },
  {
    id: 111,
    name: "Le Fournil de Nanterre",
    address: "Rue Maurice Thorez, 92000 Nanterre",
    description: "Boulangerie avec formules sandwich + boisson.",
    price: 7,
    travelTime: 10,
    tags: ["sandwicherie", "pasCher", "aEmporter"],
    allergiesNotes: "Gluten et lait, quelques salades sans gluten.",
    optimalMenu: "Sandwich + dessert pâtisserie à partager.",
    author: "Promo 2024",
    campus: "nanterre",
    lat: 48.8930,
    lng: 2.1990,
    feedback: [],
    questions: []
  },
  {
    id: 112,
    name: "Café Le Flore",
    address: "Place de la Boule, 92000 Nanterre",
    description: "Café‑brasserie avec terrasse, idéal pour un déjeuner plus posé.",
    price: 17,
    travelTime: 12,
    tags: ["cafe", "brasserie", "cool", "terrasse"],
    allergiesNotes: "Plats variés, allergènes indiqués sur la carte.",
    optimalMenu: "Salade composée + boisson chaude si tu veux un repas plus calme.",
    author: "Ancien ESILV",
    campus: "nanterre",
    lat: 48.8992,
    lng: 2.2075,
    feedback: [],
    questions: []
  },
  {
    id: 113,
    name: "Bubble Tea Campus",
    address: "Rue de l’Université, 92000 Nanterre",
    description: "Petit bubble tea avec quelques snacks sucrés et salés.",
    price: 6,
    travelTime: 5,
    tags: ["cafe", "cool", "aEmporter"],
    allergiesNotes: "Lait dans certaines boissons, perles de tapioca.",
    optimalMenu: "Bubble tea taille M + cookie pour un goûter après les cours.",
    author: "Promo 2025",
    campus: "nanterre",
    lat: 48.9042,
    lng: 2.2150,
    feedback: [],
    questions: []
  },
  {
    id: 114,
    name: "Restaurant Universitaire L’Ardoise",
    address: "Avenue de la République, 92000 Nanterre",
    description: "Autre RU du secteur, avec quelques grillades et plats au four.",
    price: 4,
    travelTime: 8,
    tags: ["ru", "pasCher"],
    allergiesNotes: "Cadre CROUS, affichage réglementaire des allergènes.",
    optimalMenu: "Plat du jour + légumes pour un repas équilibré.",
    author: "Étudiant Nanterre",
    campus: "nanterre",
    lat: 48.9028,
    lng: 2.2105,
    feedback: [],
    questions: []
  },
  {
    id: 115,
    name: "Food‑truck Campus Ouest",
    address: "Allée Jean Rostand, 92000 Nanterre",
    description: "Food‑truck présent certains jours avec burgers et frites.",
    price: 10,
    travelTime: 6,
    tags: ["foodTruck", "cool", "aEmporter"],
    allergiesNotes: "Gluten, lait et oeufs dans les burgers.",
    optimalMenu: "Burger du jour + petite frite, idéal par beau temps.",
    author: "Promo 2022",
    campus: "nanterre",
    lat: 48.9038,
    lng: 2.2100,
    feedback: [],
    questions: []
  },
  {
    id: 116,
    name: "Veggie Corner Nanterre",
    address: "Rue Salvador Allende, 92000 Nanterre",
    description: "Petite cantine avec bowls et plats végétariens.",
    price: 12,
    travelTime: 11,
    tags: ["vegetarien", "vegan", "bio", "cool"],
    allergiesNotes: "Plats majoritairement sans viande, plusieurs options sans lactose.",
    optimalMenu: "Bowl vegan + dessert fruité pour un midi léger.",
    author: "Promo 2024",
    campus: "nanterre",
    lat: 48.8975,
    lng: 2.2055,
    feedback: [],
    questions: []
  },
  {
    id: 117,
    name: "Crêperie du Parc",
    address: "Avenue Joliot Curie, 92000 Nanterre",
    description: "Crêperie bretonne avec galettes salées et crêpes sucrées.",
    price: 13,
    travelTime: 13,
    tags: ["brasserie", "cool", "vegetarien"],
    allergiesNotes: "Crêpes de blé noir possibles, mais traces de gluten et lait.",
    optimalMenu: "Galette complète + crêpe sucrée à partager.",
    author: "Ancien ESILV",
    campus: "nanterre",
    lat: 48.8960,
    lng: 2.2040,
    feedback: [],
    questions: []
  },
  {
    id: 118,
    name: "Sandwicherie Bio Campus",
    address: "Rue de l’Université, 92000 Nanterre",
    description: "Sandwicherie mettant en avant des produits bio et locaux.",
    price: 10,
    travelTime: 6,
    tags: ["sandwicherie", "bio", "aEmporter"],
    allergiesNotes: "Ingrédients clairement indiqués, options végétariennes.",
    optimalMenu: "Sandwich aux légumes grillés + jus pressé.",
    author: "Promo 2023",
    campus: "nanterre",
    lat: 48.9037,
    lng: 2.2160,
    feedback: [],
    questions: []
  },
  {
    id: 119,
    name: "Snack Halal des Provinces",
    address: "Boulevard des Provinces Françaises, 92000 Nanterre",
    description: "Snack halal avec grillades et sandwichs variés.",
    price: 9,
    travelTime: 9,
    tags: ["fastFood", "halal", "pasCher"],
    allergiesNotes: "Gluten et lait, demander une assiette sans sauce si besoin.",
    optimalMenu: "Assiette kebab + salade pour éviter le pain.",
    author: "Étudiant Nanterre",
    campus: "nanterre",
    lat: 48.9070,
    lng: 2.2195,
    feedback: [],
    questions: []
  },
  {
    id: 120,
    name: "Café Campus Bibliothèque",
    address: "Allée de l’Université, 92000 Nanterre",
    description: "Café calme à côté de la bibliothèque, idéal pour une pause révision.",
    price: 5,
    travelTime: 4,
    tags: ["cafe", "calme"],
    allergiesNotes: "Boissons et petites pâtisseries, peu de salé.",
    optimalMenu: "Café + cookie pour une pause entre deux séances de travail.",
    author: "Promo 2025",
    campus: "nanterre",
    lat: 48.9047,
    lng: 2.2148,
    feedback: [],
    questions: []
  },
    {
    id: 201,
    name: "Resto U' La Chantrerie",
    address: "4 rue Christian Pauc, 44300 Nantes",
    description: "Restaurant universitaire principal de la Chantrerie, menus complets à tarif étudiant.",
    price: 4,
    travelTime: 5,
    tags: ["ru", "pasCher"],
    allergiesNotes: "Allergènes affichés en salle, plusieurs options végétariennes.",
    optimalMenu: "Menu plat chaud + légumes pour tenir tout l’après‑midi.",
    author: "Étudiant Nantes",
    campus: "nantes",
    lat: 47.2865,
    lng: -1.5210,
    feedback: [],
    questions: []
  },
  {
    id: 202,
    name: "Cafétéria Chantrerie",
    address: "Boulevard Ampère, 44300 Nantes",
    description: "Cafétéria proche des écoles avec sandwiches, salades et desserts.",
    price: 6,
    travelTime: 4,
    tags: ["ru", "sandwicherie", "rapide", "aEmporter"],
    allergiesNotes: "Produits standards CROUS, allergènes indiqués.",
    optimalMenu: "Sandwich + yaourt si tu veux manger vite entre deux projets.",
    author: "Promo 2023",
    campus: "nantes",
    lat: 47.2860,
    lng: -1.5200,
    feedback: [],
    questions: []
  },
  {
    id: 203,
    name: "La Grillade Nantaise",
    address: "Impasse Petit Chatelier, 44300 Nantes",
    description: "Grillades et cuisine française conviviale au nord‑est de Nantes.",
    price: 18,
    travelTime: 10,
    tags: ["brasserie", "cool", "terrasse"],
    allergiesNotes: "Viandes grillées, sauces à base de produits laitiers possibles.",
    optimalMenu: "Plat du jour grillade + eau carafe pour un midi plus posé.",
    author: "Promo 2022",
    campus: "nantes",
    lat: 47.2730,
    lng: -1.5180,
    feedback: [],
    questions: []
  },
  {
    id: 204,
    name: "Carremand Gourmand",
    address: "Rue du Bois Raguenet, 44300 Nantes",
    description: "Petite adresse de cuisine maison, plats simples et desserts maison.",
    price: 13,
    travelTime: 8,
    tags: ["brasserie", "pasCher", "cool"],
    allergiesNotes: "Cuisine maison, possible d’adapter certains plats.",
    optimalMenu: "Plat du jour + dessert maison si tu veux te faire plaisir.",
    author: "Tuteur ESILV Nantes",
    campus: "nantes",
    lat: 47.2810,
    lng: -1.5205,
    feedback: [],
    questions: []
  },
  {
    id: 205,
    name: "Food‑truck Chantrerie",
    address: "Allée de Chantrerie, 44300 Nantes",
    description: "Food‑truck présent certains midis avec burgers et frites.",
    price: 9,
    travelTime: 5,
    tags: ["foodTruck", "fastFood", "cool", "aEmporter"],
    allergiesNotes: "Gluten, lait et oeufs, recettes variables selon les jours.",
    optimalMenu: "Burger du jour + petite frite, parfait par beau temps.",
    author: "Promo 2024 Nantes",
    campus: "nantes",
    lat: 47.2860,
    lng: -1.5190,
    feedback: [],
    questions: []
  },
  {
    id: 206,
    name: "Wrap Factory Nantes Nord",
    address: "Route de Paris, 44300 Nantes",
    description: "Wraps personnalisables avec options végétariennes et sans porc.",
    price: 11,
    travelTime: 12,
    tags: ["sandwicherie", "vegetarien", "sansPorc", "rapide"],
    allergiesNotes: "Tortillas avec gluten, infos sur les sauces au comptoir.",
    optimalMenu: "Wrap poulet ou wrap veggie + boisson pour manger en marchant.",
    author: "Tuteur ESILV Nantes",
    campus: "nantes",
    lat: 47.2825,
    lng: -1.5205,
    feedback: [],
    questions: []
  },
  {
    id: 207,
    name: "Manoir de la Régate",
    address: "155 route de Gachet, 44300 Nantes",
    description: "Restaurant gastronomique en bord d’Erdre, pour les grandes occasions.",
    price: 40,
    travelTime: 15,
    tags: ["brasserie", "bio", "cool", "terrasse"],
    allergiesNotes: "Cuisine fine, possible d’adapter en cas d’allergie annoncée.",
    optimalMenu: "Menu déjeuner en semaine pour profiter du cadre à prix réduit.",
    author: "Promo 2021",
    campus: "nantes",
    lat: 47.2800,
    lng: -1.5160,
    feedback: [],
    questions: []
  },
  {
    id: 208,
    name: "Sain – Café Cantine",
    address: "Quartier Gare, 44000 Nantes",
    description: "Cantine moderne avec cuisine de saison et produits locaux.",
    price: 16,
    travelTime: 25,
    tags: ["bio", "vegetarien", "vegan", "cool"],
    allergiesNotes: "Plusieurs options végétariennes et parfois vegan.",
    optimalMenu: "Assiette du jour végétarienne si tu veux manger plus léger.",
    author: "Promo 2022 Nantes",
    campus: "nantes",
    lat: 47.2170,
    lng: -1.5420,
    feedback: [],
    questions: []
  },
  {
    id: 209,
    name: "Pizzeria de la Chantrerie",
    address: "Boulevard Ampère, 44300 Nantes",
    description: "Petite pizzeria proche des écoles de la Chantrerie.",
    price: 12,
    travelTime: 7,
    tags: ["brasserie", "fastFood", "cool"],
    allergiesNotes: "Gluten et fromage dans la plupart des plats.",
    optimalMenu: "Pizza margherita ou 4 fromages à partager entre amis.",
    author: "ESILV Nantes",
    campus: "nantes",
    lat: 47.2868,
    lng: -1.5220,
    feedback: [],
    questions: []
  },
  {
    id: 210,
    name: "Kebab Halal Université",
    address: "Boulevard Michelet, 44300 Nantes",
    description: "Kebab halal très fréquenté par les étudiants de la fac voisine.",
    price: 8,
    travelTime: 15,
    tags: ["fastFood", "halal", "pasCher", "rapide"],
    allergiesNotes: "Gluten dans le pain, lait dans certaines sauces.",
    optimalMenu: "Assiette kebab + salade si tu veux éviter le pain.",
    author: "Étudiant Nantes",
    campus: "nantes",
    lat: 47.2390,
    lng: -1.5550,
    feedback: [],
    questions: []
  },
  {
    id: 211,
    name: "Cantine Veggie Talensac",
    address: "Place Talensac, 44000 Nantes",
    description: "Cantine axée sur les légumes, bowls et plats du jour végétariens.",
    price: 14,
    travelTime: 25,
    tags: ["vegetarien", "vegan", "bio", "cool"],
    allergiesNotes: "Beaucoup de plats sans viande, demander pour le gluten.",
    optimalMenu: "Assiette du jour veggie + dessert maison.",
    author: "Promo 2020",
    campus: "nantes",
    lat: 47.2220,
    lng: -1.5640,
    feedback: [],
    questions: []
  },
  {
    id: 212,
    name: "Boulangerie de la Chantrerie",
    address: "Boulevard Ampère, 44300 Nantes",
    description: "Boulangerie avec formules sandwich + boisson.",
    price: 7,
    travelTime: 6,
    tags: ["sandwicherie", "pasCher", "aEmporter"],
    allergiesNotes: "Gluten et lait dans la plupart des produits.",
    optimalMenu: "Formule sandwich + dessert pour un midi rapide.",
    author: "Promo 2023",
    campus: "nantes",
    lat: 47.2862,
    lng: -1.5215,
    feedback: [],
    questions: []
  },
  {
    id: 213,
    name: "Burger Nord Nantes",
    address: "Route de Paris, 44300 Nantes",
    description: "Burgers et frites façon fast‑food, ouvert tard le soir.",
    price: 11,
    travelTime: 12,
    tags: ["fastFood", "pasCher", "rapide"],
    allergiesNotes: "Gluten, lait et oeufs, menu classique de fast‑food.",
    optimalMenu: "Burger simple + petite frite si tu reprends les cours après.",
    author: "Promo 2024",
    campus: "nantes",
    lat: 47.2830,
    lng: -1.5195,
    feedback: [],
    questions: []
  },
  {
    id: 214,
    name: "Crêperie Erdre & Blé Noir",
    address: "Quai de Versailles, 44000 Nantes",
    description: "Crêperie en bord d’Erdre, galettes salées et crêpes sucrées.",
    price: 13,
    travelTime: 20,
    tags: ["brasserie", "cool", "vegetarien", "terrasse"],
    allergiesNotes: "Galettes de sarrasin possibles, mais traces de gluten.",
    optimalMenu: "Galette complète + crêpe au sucre à partager.",
    author: "Ancien ESILV",
    campus: "nantes",
    lat: 47.2270,
    lng: -1.5530,
    feedback: [],
    questions: []
  },
  {
    id: 215,
    name: "Bubble Tea Erdre",
    address: "Quai de Versailles, 44000 Nantes",
    description: "Bubble tea et snacks sucrés, parfait pour un goûter après les cours.",
    price: 6,
    travelTime: 20,
    tags: ["cafe", "cool", "aEmporter"],
    allergiesNotes: "Lait dans certaines boissons, perles de tapioca.",
    optimalMenu: "Bubble tea taille M + cookie pour une pause révisions.",
    author: "Promo 2025",
    campus: "nantes",
    lat: 47.2265,
    lng: -1.5525,
    feedback: [],
    questions: []
  },
  {
    id: 216,
    name: "Sandwicherie Bio Erdre",
    address: "Quai de la Jonelière, 44300 Nantes",
    description: "Sandwichs et salades inspirés de produits locaux et bio.",
    price: 10,
    travelTime: 15,
    tags: ["sandwicherie", "bio", "aEmporter"],
    allergiesNotes: "Ingrédients listés, plusieurs options veggies.",
    optimalMenu: "Sandwich légumes rôtis + salade de fruits.",
    author: "Promo 2022",
    campus: "nantes",
    lat: 47.2500,
    lng: -1.5360,
    feedback: [],
    questions: []
  },
  {
    id: 217,
    name: "Tacos de la Beaujoire",
    address: "Boulevard des Batignolles, 44300 Nantes",
    description: "Tacos à la française, fréquenté les jours de match et de concert.",
    price: 9,
    travelTime: 15,
    tags: ["fastFood", "pasCher"],
    allergiesNotes: "Gluten, fromage, sauces piquantes.",
    optimalMenu: "Tacos taille M + boisson si tu vas ensuite en amphi.",
    author: "Étudiant Nantes",
    campus: "nantes",
    lat: 47.2550,
    lng: -1.5250,
    feedback: [],
    questions: []
  },
  {
    id: 218,
    name: "Café Campus Chantrerie",
    address: "Boulevard Ampère, 44300 Nantes",
    description: "Café calme près des écoles, idéal pour bosser en groupe.",
    price: 5,
    travelTime: 5,
    tags: ["cafe", "calme"],
    allergiesNotes: "Boissons chaudes, quelques pâtisseries.",
    optimalMenu: "Cappuccino + cookie pour un travail de groupe de 2 h.",
    author: "Promo 2023",
    campus: "nantes",
    lat: 47.2863,
    lng: -1.5208,
    feedback: [],
    questions: []
  },
  {
    id: 219,
    name: "Pho & Co Nantes",
    address: "Rue Paul Bellamy, 44000 Nantes",
    description: "Cuisine vietnamienne avec pho, bo bun et plats de riz.",
    price: 14,
    travelTime: 25,
    tags: ["sandwicherie", "aEmporter", "cool"],
    allergiesNotes: "Soja, arachides et coriandre fréquents, demander une adaptation.",
    optimalMenu: "Bo bun poulet sans cacahuètes si tu es allergique.",
    author: "Ancien ESILV",
    campus: "nantes",
    lat: 47.2250,
    lng: -1.5540,
    feedback: [],
    questions: []
  },
  {
    id: 220,
    name: "Restaurant Universitaire Tertre",
    address: "Chemin de la Censive du Tertre, 44300 Nantes",
    description: "RU du campus Tertre, pratique si tu as cours côté université.",
    price: 4,
    travelTime: 20,
    tags: ["ru", "pasCher"],
    allergiesNotes: "Allergènes indiqués selon la réglementation CROUS.",
    optimalMenu: "Menu complet entrée + plat pour un midi très économique.",
    author: "Étudiant Nantes",
    campus: "nantes",
    lat: 47.2455,
    lng: -1.5535,
    feedback: [],
    questions: []
  },
    {
    id: 301,
    name: "RU Vert Bois",
    address: "205 rue de la Chênaie, 34090 Montpellier",
    description: "Restaurant universitaire proche des campus nord, menus complets à tarif CROUS.",
    price: 4,
    travelTime: 10,
    tags: ["ru", "pasCher"],
    allergiesNotes: "Allergènes indiqués en salle, options végétariennes régulières.",
    optimalMenu: "Plat chaud + légumes pour tenir jusqu’au soir.",
    author: "Étudiant Montpellier",
    campus: "montpellier",
    lat: 43.6390,
    lng: 3.8700,
    feedback: [],
    questions: []
  },
  {
    id: 302,
    name: "RU Triolet",
    address: "Rue du Triolet, 34090 Montpellier",
    description: "Grand RU du secteur universitaire, pratique si tu as cours à proximité.",
    price: 4,
    travelTime: 12,
    tags: ["ru", "pasCher"],
    allergiesNotes: "Cadre CROUS, buffet avec signalement des allergènes.",
    optimalMenu: "Formule étudiante entrée + plat chaud.",
    author: "Promo 2023",
    campus: "montpellier",
    lat: 43.6300,
    lng: 3.8630,
    feedback: [],
    questions: []
  },
  {
    id: 303,
    name: "RU Richter",
    address: "Rue Vendémiaire, 34000 Montpellier",
    description: "RU du campus Richter, adapté si tu es vers les bords du Lez.",
    price: 4,
    travelTime: 15,
    tags: ["ru", "pasCher"],
    allergiesNotes: "Allergènes affichés, plusieurs plats végétariens.",
    optimalMenu: "Menu complet entrée + plat + dessert simple.",
    author: "Étudiant Montpellier",
    campus: "montpellier",
    lat: 43.6050,
    lng: 3.8960,
    feedback: [],
    questions: []
  },
  {
    id: 304,
    name: "Tacos Campus Nord",
    address: "Avenue du Pic Saint‑Loup, 34090 Montpellier",
    description: "Tacos à la française, très fréquenté par les étudiants du nord.",
    price: 9,
    travelTime: 12,
    tags: ["fastFood", "pasCher"],
    allergiesNotes: "Gluten, fromage et sauces riches.",
    optimalMenu: "Tacos taille M une viande si tu veux éviter le coup de barre.",
    author: "Promo 2024",
    campus: "montpellier",
    lat: 43.6335,
    lng: 3.8510,
    feedback: [],
    questions: []
  },
  {
    id: 305,
    name: "Falafel Halal Boutonnet",
    address: "Rue du Faubourg Boutonnet, 34090 Montpellier",
    description: "Falafels et grillades halal, bonne option veggie ou poulet.",
    price: 8,
    travelTime: 14,
    tags: ["fastFood", "halal", "vegetarien", "pasCher"],
    allergiesNotes: "Gluten dans le pain, sésame dans les falafels.",
    optimalMenu: "Sandwich falafel + boisson pour un repas quasi veggie.",
    author: "Ancien ESILV",
    campus: "montpellier",
    lat: 43.6155,
    lng: 3.8720,
    feedback: [],
    questions: []
  },
  {
    id: 306,
    name: "Empanadas Club",
    address: "Rue du Faubourg du Courreau, 34000 Montpellier",
    description: "Empanadas salées et sucrées, parfait pour un repas rapide.",
    price: 10,
    travelTime: 18,
    tags: ["sandwicherie", "aEmporter", "rapide"],
    allergiesNotes: "Pâte à base de gluten, garnitures variées.",
    optimalMenu: "Assortiment de 3 empanadas + boisson.",
    author: "Promo 2023",
    campus: "montpellier",
    lat: 43.6055,
    lng: 3.8705,
    feedback: [],
    questions: []
  },
  {
    id: 307,
    name: "Il Ristorante Montpellier",
    address: "Rue Georges Méliès, 34430 Saint‑Jean‑de‑Védas",
    description: "Chaîne italienne avec pâtes, pizzas et salades.",
    price: 18,
    travelTime: 20,
    tags: ["brasserie", "cool"],
    allergiesNotes: "Gluten, fromage, oeufs dans la plupart des plats.",
    optimalMenu: "Pâtes du jour + eau carafe pour un midi un peu plus chic.",
    author: "Promo 2022",
    campus: "montpellier",
    lat: 43.5750,
    lng: 3.8420,
    feedback: [],
    questions: []
  },
  {
    id: 308,
    name: "Pizzeria du Triolet",
    address: "Rue du Triolet, 34090 Montpellier",
    description: "Pizzeria étudiante avec formules midi abordables.",
    price: 11,
    travelTime: 10,
    tags: ["brasserie", "pasCher", "cool"],
    allergiesNotes: "Gluten et fromage dans la majorité des plats.",
    optimalMenu: "Pizza margherita + boisson, rapide avant un TD.",
    author: "Étudiant Montpellier",
    campus: "montpellier",
    lat: 43.6295,
    lng: 3.8620,
    feedback: [],
    questions: []
  },
  {
    id: 309,
    name: "Salad Bar Eco Campus",
    address: "Rue du Triolet, 34090 Montpellier",
    description: "Bar à salades à composer, avec beaucoup de légumes et toppings.",
    price: 11,
    travelTime: 10,
    tags: ["vegetarien", "vegan", "bio", "rapide"],
    allergiesNotes: "Fruits à coque possibles, bien choisir les toppings.",
    optimalMenu: "Base salade + légumes grillés + pois chiches pour un bol vegan.",
    author: "Promo 2024",
    campus: "montpellier",
    lat: 43.6302,
    lng: 3.8625,
    feedback: [],
    questions: []
  },
  {
    id: 310,
    name: "Crêperie du Centre",
    address: "Place de la Comédie, 34000 Montpellier",
    description: "Crêperie en plein centre, galettes salées et crêpes sucrées.",
    price: 13,
    travelTime: 20,
    tags: ["brasserie", "cool", "terrasse", "vegetarien"],
    allergiesNotes: "Galettes de blé noir possibles, mais traces de gluten et lait.",
    optimalMenu: "Galette complète + crêpe sucrée à partager.",
    author: "Promo 2021",
    campus: "montpellier",
    lat: 43.6105,
    lng: 3.8765,
    feedback: [],
    questions: []
  },
  {
    id: 311,
    name: "Burger Place Comédie",
    address: "Rue de la Loge, 34000 Montpellier",
    description: "Burgers gourmets en plein centre‑ville.",
    price: 15,
    travelTime: 20,
    tags: ["fastFood", "cool"],
    allergiesNotes: "Gluten, lait et oeufs, peu d’options sans allergènes.",
    optimalMenu: "Burger du jour + eau pour limiter le budget.",
    author: "Étudiant Montpellier",
    campus: "montpellier",
    lat: 43.6110,
    lng: 3.8780,
    feedback: [],
    questions: []
  },
  {
    id: 312,
    name: "Vegan Street Food",
    address: "Rue de l’Université, 34000 Montpellier",
    description: "Street‑food 100 % vegan, burgers et bowls.",
    price: 13,
    travelTime: 18,
    tags: ["vegan", "bio", "fastFood", "cool"],
    allergiesNotes: "Certains plats avec fruits à coque, bien vérifier.",
    optimalMenu: "Burger vegan + frites au four pour un midi gourmand.",
    author: "Promo 2025",
    campus: "montpellier",
    lat: 43.6108,
    lng: 3.8740,
    feedback: [],
    questions: []
  },
  {
    id: 313,
    name: "Snack Halal Occitanie",
    address: "Avenue du Docteur Pezet, 34090 Montpellier",
    description: "Snack halal avec grillades, tacos et kebabs.",
    price: 9,
    travelTime: 12,
    tags: ["fastFood", "halal", "pasCher"],
    allergiesNotes: "Gluten dans le pain, sauces variées.",
    optimalMenu: "Assiette kebab + salade pour limiter le gluten.",
    author: "Étudiant Montpellier",
    campus: "montpellier",
    lat: 43.6270,
    lng: 3.8580,
    feedback: [],
    questions: []
  },
  {
    id: 314,
    name: "Boulangerie Campus Nord",
    address: "Avenue du Pic Saint‑Loup, 34090 Montpellier",
    description: "Boulangerie avec formules sandwich + boisson.",
    price: 7,
    travelTime: 8,
    tags: ["sandwicherie", "pasCher", "aEmporter"],
    allergiesNotes: "Gluten et lait dans la plupart des produits.",
    optimalMenu: "Sandwich + dessert pour un midi rapide.",
    author: "Promo 2023",
    campus: "montpellier",
    lat: 43.6330,
    lng: 3.8530,
    feedback: [],
    questions: []
  },
  {
    id: 315,
    name: "Café Bibliothèque",
    address: "Rue du Professeur Henri Serre, 34090 Montpellier",
    description: "Café calme à côté des bibliothèques universitaires.",
    price: 5,
    travelTime: 8,
    tags: ["cafe", "calme"],
    allergiesNotes: "Boissons chaudes, quelques pâtisseries.",
    optimalMenu: "Café + cookie pour une pause révision.",
    author: "Promo 2022",
    campus: "montpellier",
    lat: 43.6340,
    lng: 3.8640,
    feedback: [],
    questions: []
  },
  {
    id: 316,
    name: "Pho & Noodles",
    address: "Avenue du Pont Juvénal, 34000 Montpellier",
    description: "Cuisine vietnamienne avec pho, bo bun et plats de riz.",
    price: 14,
    travelTime: 18,
    tags: ["sandwicherie", "aEmporter", "cool"],
    allergiesNotes: "Soja, arachides, coriandre, demander une adaptation si besoin.",
    optimalMenu: "Bo bun poulet sans cacahuètes si tu es allergique.",
    author: "Ancien ESILV",
    campus: "montpellier",
    lat: 43.6075,
    lng: 3.8840,
    feedback: [],
    questions: []
  },
  {
    id: 317,
    name: "Poke Bowl Océanie",
    address: "Rue de l’Aiguillerie, 34000 Montpellier",
    description: "Poke bowls à composer, base riz ou salade.",
    price: 13,
    travelTime: 19,
    tags: ["bio", "vegetarien", "vegan", "cool"],
    allergiesNotes: "Poisson cru et sauces soja possibles, options veggies.",
    optimalMenu: "Poke veggie + boisson si tu veux manger sain et rapide.",
    author: "Promo 2024",
    campus: "montpellier",
    lat: 43.6115,
    lng: 3.8775,
    feedback: [],
    questions: []
  },
  {
    id: 318,
    name: "Snack Sans Gluten Comédie",
    address: "Rue du Petit Saint‑Jean, 34000 Montpellier",
    description: "Petite adresse avec plusieurs options sans gluten.",
    price: 12,
    travelTime: 20,
    tags: ["sansGluten", "sandwicherie", "aEmporter"],
    allergiesNotes: "Attention aux traces, mais plusieurs plats dédiés.",
    optimalMenu: "Salade + dessert sans gluten si tu es intolérant.",
    author: "Promo 2023",
    campus: "montpellier",
    lat: 43.6102,
    lng: 3.8768,
    feedback: [],
    questions: []
  },
  {
    id: 319,
    name: "Crêperie Boutonnet",
    address: "Rue du Faubourg Boutonnet, 34090 Montpellier",
    description: "Crêpes et galettes à deux pas des facs nord.",
    price: 12,
    travelTime: 14,
    tags: ["brasserie", "cool", "vegetarien"],
    allergiesNotes: "Galettes de sarrasin possibles, lait dans beaucoup de recettes.",
    optimalMenu: "Galette salée + crêpe sucrée à partager.",
    author: "Étudiant Montpellier",
    campus: "montpellier",
    lat: 43.6160,
    lng: 3.8730,
    feedback: [],
    questions: []
  },
  {
    id: 320,
    name: "Café du Lez",
    address: "Quai du Verdanson, 34090 Montpellier",
    description: "Café en bord de Lez, idéal pour une pause en terrasse.",
    price: 7,
    travelTime: 17,
    tags: ["cafe", "cool", "terrasse"],
    allergiesNotes: "Boissons, snacks sucrés et salés.",
    optimalMenu: "Boisson chaude + snack salé pour un travail de groupe au soleil.",
    author: "Promo 2025",
    campus: "montpellier",
    lat: 43.6100,
    lng: 3.8830,
    feedback: [],
    questions: []
  }

  // ... AJOUTE ICI d’autres restos pour laDefense, nanterre, nantes, montpellier ...
];
// Critères en mémoire (non persistants)
let criteria = {
  tags: ["pasCher", "rapide"],
  allergies: "",
  timeAvailable: 60,
  travelTimeMax: 20,
  budget: 10
};

let currentCampus = "laDefense";
let map;
let markers = [];
let selectedRestaurantId = null;
let isAdmin = false;
let reorderMode = false;
let weekPlan = null;

// ---------- Navigation ----------
const screens = document.querySelectorAll(".screen");
const tabs = document.querySelectorAll(".main-menu .tab");
const actionBtns = document.querySelectorAll(".action-btn");

tabs.forEach(tab => {
  tab.addEventListener("click", () => switchScreen(tab.dataset.screen));
});
actionBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.screenTarget;
    if (target) switchScreen(target);
  });
});

function switchScreen(id) {
  screens.forEach(s => s.classList.toggle("active", s.id === id));
  tabs.forEach(t => t.classList.toggle("active", t.dataset.screen === id));
}

// ---------- Mode admin ----------
const adminToggle = document.getElementById("adminModeToggle");
if (adminToggle) {
  adminToggle.addEventListener("change", () => {
    isAdmin = adminToggle.checked;
    renderDirectory();
    renderWeek();
  });
}

// ---------- Critères ----------
const criteriaForm = document.getElementById("criteriaForm");

if (criteriaForm) {
  criteriaForm.addEventListener("submit", e => {
    e.preventDefault();
    const formData = new FormData(criteriaForm);
    const tags = formData.getAll("tags");
    const allergies = document.getElementById("allergiesInput").value.trim();
    const timeAvailable = Number(document.getElementById("timeAvailableInput").value);
    const travelTimeMax = Number(document.getElementById("travelTimeMaxInput").value);
    const budget = Number(document.getElementById("budgetInput").value);

    criteria = { tags, allergies, timeAvailable, travelTimeMax, budget };
    alert("Critères mis à jour (non sauvegardés).");
  });
}

// ---------- Semaine ----------
const weekList = document.getElementById("weekList");
const regenWeekBtn = document.getElementById("regenWeekBtn");
const campusSelect = document.getElementById("campusSelect");
const gotoCriteriaBtn = document.getElementById("gotoCriteriaBtn");
const exportPdfBtn = document.getElementById("exportPdfBtn");
const toggleReorderBtn = document.getElementById("toggleReorderBtn");

if (campusSelect) {
  campusSelect.addEventListener("change", () => {
    currentCampus = campusSelect.value;
    generateWeekPlan(true);
    if (map) centerMapOnCampus();
  });
}

if (regenWeekBtn) {
  regenWeekBtn.addEventListener("click", () => generateWeekPlan(true));
}

if (gotoCriteriaBtn) {
  gotoCriteriaBtn.addEventListener("click", () => switchScreen("criteria"));
}

if (exportPdfBtn) {
  exportPdfBtn.addEventListener("click", () => {
    const element = document.getElementById("week");
    const opt = {
      margin: 10,
      filename: "LeoFood-semaine.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
    };
    html2pdf().set(opt).from(element).save();
  });
}

if (toggleReorderBtn) {
  toggleReorderBtn.addEventListener("click", () => {
    reorderMode = !reorderMode;
    toggleReorderBtn.textContent = reorderMode
      ? "Terminer la réorganisation"
      : "Réorganiser les jours";
    renderWeek();
  });
}

function generateWeekPlan(force = false) {
  if (weekPlan && !force) {
    renderWeek();
    return;
  }
  const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];
  const filtered = restaurants.filter(r =>
    r.campus === currentCampus &&
    (!criteria.travelTimeMax || !r.travelTime || r.travelTime <= criteria.travelTimeMax)
  );
  const plan = {};
  days.forEach(day => {
    const resto = filtered.length
      ? filtered[Math.floor(Math.random() * filtered.length)]
      : null;
    plan[day] = resto ? { restaurantId: resto.id } : null;
  });
  weekPlan = plan;
  renderWeek();
}

function changeRestaurantForDay(day) {
  const filtered = restaurants.filter(r => r.campus === currentCampus);
  if (!filtered.length) return;
  const newResto = filtered[Math.floor(Math.random() * filtered.length)];
  if (!weekPlan) weekPlan = {};
  weekPlan[day] = { restaurantId: newResto.id };
  renderWeek();
}

function renderWeek() {
  if (!weekList) return;
  weekList.innerHTML = "";

  const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];

  days.forEach(day => {
    const li = document.createElement("li");
    li.className = "day-item";
    li.dataset.day = day;

    if (reorderMode) {
      li.setAttribute("draggable", "true");
      li.classList.add("draggable");
      addDragAndDropHandlers(li);
    }

    const header = document.createElement("div");
    header.className = "day-header";

    const title = document.createElement("h3");
    title.textContent = day;
    header.appendChild(title);

    const detailBtn = document.createElement("button");
    detailBtn.className = "btn small";
    detailBtn.textContent = "Voir le détail";

    const changeBtn = document.createElement("button");
    changeBtn.className = "btn small";
    changeBtn.textContent = "Changer";

    if (!reorderMode) {
      header.appendChild(detailBtn);
      header.appendChild(changeBtn);
    }

    li.appendChild(header);

    const details = document.createElement("div");
    details.className = "day-details";

    const entry = weekPlan ? weekPlan[day] : null;
    const resto = entry ? restaurants.find(r => r.id === entry.restaurantId) : null;

    if (resto) {
      details.innerHTML = `
        <p><strong>${resto.name}</strong></p>
        <p>${resto.address}</p>
        <p>Temps de trajet estimé : ${resto.travelTime || "?"} min</p>
        <p>Prix moyen : ${resto.price ? resto.price + " €" : "?"}</p>
        <p>Menu optimal : ${resto.optimalMenu || "Non renseigné."}</p>
        <p>Tags : ${resto.tags.map(t => `<span class="tag-chip">${t}</span>`).join(" ")}</p>
      `;

      if (!reorderMode) {
        li.addEventListener("click", () => {
          openRestaurantModal(resto);
          focusRestaurantOnMap(resto);
        });

        detailBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          openRestaurantModal(resto);
          focusRestaurantOnMap(resto);
        });

        changeBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          changeRestaurantForDay(day);
        });
      }
    } else {
      details.textContent = "Aucune adresse disponible pour l’instant.";
    }

    li.appendChild(details);
    weekList.appendChild(li);
  });

  drawMarkersForWeek();
}

// Drag & drop
let draggedDay = null;

function addDragAndDropHandlers(li) {
  li.addEventListener("dragstart", (e) => {
    draggedDay = li.dataset.day;
    e.dataTransfer.effectAllowed = "move";
  });

  li.addEventListener("dragover", (e) => {
    e.preventDefault();
    li.classList.add("drag-over");
  });

  li.addEventListener("dragleave", () => {
    li.classList.remove("drag-over");
  });

  li.addEventListener("drop", () => {
    li.classList.remove("drag-over");
    const targetDay = li.dataset.day;
    if (!draggedDay || draggedDay === targetDay) return;

    const tmp = weekPlan[draggedDay];
    weekPlan[draggedDay] = weekPlan[targetDay];
    weekPlan[targetDay] = tmp;

    renderWeek();
  });

  li.addEventListener("dragend", () => {
    draggedDay = null;
  });
}

// ---------- Annuaire ----------
const directoryList = document.getElementById("directoryList");
const directoryCampusFilter = document.getElementById("directoryCampusFilter");

if (directoryCampusFilter) {
  directoryCampusFilter.addEventListener("change", renderDirectory);
}

function deleteRestaurant(id) {
  restaurants = restaurants.filter(r => r.id !== id);
  generateWeekPlan(true);
  renderDirectory();
}

function renderDirectory() {
  if (!directoryList) return;
  directoryList.innerHTML = "";

  const campusFilter = directoryCampusFilter ? directoryCampusFilter.value : "all";
  const campusesOrder = ["laDefense", "nanterre", "nantes", "montpellier"];

  campusesOrder.forEach(campusKey => {
    const campusRestaurants = restaurants.filter(r =>
      r.campus === campusKey &&
      (campusFilter === "all" || campusFilter === campusKey)
    );
    if (!campusRestaurants.length) return;

    const sectionHeader = document.createElement("li");
    sectionHeader.className = "restaurant-item";
    const label =
      campusKey === "laDefense" ? "La Défense" :
      campusKey === "nanterre" ? "Nanterre" :
      campusKey === "nantes" ? "Nantes" : "Montpellier";
    sectionHeader.innerHTML = `<h3>${label}</h3>`;
    directoryList.appendChild(sectionHeader);

    campusRestaurants.forEach(resto => {
      const li = document.createElement("li");
      li.className = "restaurant-item";
      li.innerHTML = `
        <h3>${resto.name}</h3>
        <p>${resto.address}</p>
        <p>${resto.description}</p>
        <p><small>${resto.price ? resto.price + " €" : ""}</small></p>
      `;

      li.addEventListener("click", () => {
        openRestaurantModal(resto);
        focusRestaurantOnMap(resto);
        switchScreen("week");
      });

      if (isAdmin) {
        const delBtn = document.createElement("button");
        delBtn.textContent = "Supprimer";
        delBtn.className = "btn small";
        delBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          if (confirm("Supprimer ce restaurant ?")) {
            deleteRestaurant(resto.id);
          }
        });
        li.appendChild(delBtn);
      }

      directoryList.appendChild(li);
    });
  });
}

// ---------- Ajout resto + nouveau tag ----------
const addForm = document.getElementById("addRestaurantForm");
const addCampusSelect = document.getElementById("addCampus");
const newTagRequestInput = document.getElementById("newTagRequestInput");
const newTagRequestBtn = document.getElementById("newTagRequestBtn");
const newTagMessage = document.getElementById("newTagMessage");

if (newTagRequestBtn && newTagRequestInput && newTagMessage) {
  newTagRequestBtn.addEventListener("click", () => {
    const value = newTagRequestInput.value.trim();
    if (!value) return;
    newTagMessage.textContent =
      `Demande de nouveau tag enregistrée : "${value}". (à valider par un admin)`;
    newTagRequestInput.value = "";
  });
}

if (addForm) {
  addForm.addEventListener("submit", e => {
    e.preventDefault();
    const campus = addCampusSelect.value;
    const name = document.getElementById("addName").value.trim();
    const address = document.getElementById("addAddress").value.trim();
    const description = document.getElementById("addDescription").value.trim();
    const price = Number(document.getElementById("addPrice").value) || null;
    const travelTime = Number(document.getElementById("addTravelTime").value) || null;
    const optimalMenu = document.getElementById("addOptimalMenu").value.trim();
    const author = document.getElementById("addAuthor").value.trim();

    const selectedTags = [];
    document.querySelectorAll("#addTagsFood input[type=checkbox],#addTagsType input[type=checkbox],#addTagsMood input[type=checkbox]")
      .forEach(cb => { if (cb.checked) selectedTags.push(cb.value); });

    if (!name || !address || !description || !author || !optimalMenu) {
      alert("Merci de remplir au moins campus, nom, adresse, description, menu optimal et pseudo.");
      return;
    }

    const newId = Date.now();
    const coords = CAMPUS_COORDS[campus];
    const resto = {
      id: newId,
      name,
      address,
      description,
      price,
      travelTime,
      tags: selectedTags,
      allergiesNotes: "",
      optimalMenu,
      author,
      campus,
      lat: coords.lat,
      lng: coords.lng,
      feedback: [],
      questions: []
    };
    restaurants.push(resto);
    renderDirectory();
    generateWeekPlan(true);
    alert("Restaurant ajouté !");
    addForm.reset();
  });
}

// ---------- Modale ----------
const modal = document.getElementById("restaurantModal");
const closeModalBtn = modal ? modal.querySelector(".close-modal") : null;
const modalName = modal ? document.getElementById("modalName") : null;
const modalDescription = modal ? document.getElementById("modalDescription") : null;
const modalOptimalMenu = modal ? document.getElementById("modalOptimalMenu") : null;
const modalMeta = modal ? document.getElementById("modalMeta") : null;
const questionForm = modal ? document.getElementById("questionForm") : null;
const feedbackForm = modal ? document.getElementById("feedbackForm") : null;

function openRestaurantModal(resto) {
  if (!modal) return;
  selectedRestaurantId = resto.id;
  modalName.textContent = resto.name;
  modalDescription.textContent = resto.description;
  modalOptimalMenu.textContent = "Menu optimal : " + (resto.optimalMenu || "Non renseigné.");
  modalMeta.textContent =
    `Adresse : ${resto.address} – Temps de trajet : ${resto.travelTime || "?"} min – Ajouté par ${resto.author}`;
  modal.classList.remove("hidden");
}

function closeRestaurantModal() {
  if (!modal) return;
  modal.classList.add("hidden");
}

if (closeModalBtn) {
  closeModalBtn.addEventListener("click", closeRestaurantModal);
}

if (modal) {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeRestaurantModal();
  });
}

if (questionForm) {
  questionForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = document.getElementById("questionText").value.trim();
    if (!text || !selectedRestaurantId) return;
    const resto = restaurants.find(r => r.id === selectedRestaurantId);
    if (!resto) return;
    resto.questions.push({ text, date: new Date().toISOString() });
    document.getElementById("questionText").value = "";
    alert("Ta question a été enregistrée.");
  });
}

if (feedbackForm) {
  feedbackForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!selectedRestaurantId) return;
    const rating = Number(document.getElementById("feedbackRating").value);
    const comment = document.getElementById("feedbackComment").value.trim();
    const resto = restaurants.find(r => r.id === selectedRestaurantId);
    if (!resto) return;
    resto.feedback.push({ rating, comment, date: new Date().toISOString() });
    document.getElementById("feedbackComment").value = "";
    alert("Merci pour ton feedback !");
  });
}

// ---------- Carte Leaflet ----------
function initMap() {
  const campusInfo = CAMPUS_COORDS[currentCampus];
  map = L.map("map").setView([campusInfo.lat, campusInfo.lng], 15);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "© OpenStreetMap contributeurs"
  }).addTo(map);

  L.marker([campusInfo.lat, campusInfo.lng])
    .addTo(map)
    .bindPopup(campusInfo.label);

  drawMarkersForWeek();
}

function centerMapOnCampus() {
  const campusInfo = CAMPUS_COORDS[currentCampus];
  map.setView([campusInfo.lat, campusInfo.lng], 15);
}

function clearMarkers() {
  markers.forEach(m => map.removeLayer(m));
  markers = [];
}

function drawMarkersForWeek() {
  if (!map || !weekPlan) return;
  clearMarkers();
  const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];
  days.forEach(day => {
    const entry = weekPlan[day];
    const resto = entry ? restaurants.find(r => r.id === entry.restaurantId) : null;
    if (!resto) return;
    const marker = L.marker([resto.lat, resto.lng])
      .addTo(map)
      .bindPopup(`<b>${resto.name}</b><br>${resto.address}`);
    marker._restaurantId = resto.id;
    markers.push(marker);
  });
}

function focusRestaurantOnMap(resto) {
  if (!map || !resto) return;
  map.setView([resto.lat, resto.lng], 17);
}

// ---------- Init ----------
document.addEventListener("DOMContentLoaded", () => {
  generateWeekPlan(true);
  renderDirectory();
  initMap();
});

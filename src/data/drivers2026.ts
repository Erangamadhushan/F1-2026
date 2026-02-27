export interface Driver2026 {
  id: number;
  firstName: string;
  lastName: string;
  number: number;
  team: string;
  nationality: string;
  countryCode?: string; // Optional ISO country code for flag icons
  age: number;
  championships: number;
  podiums: number;
  image: string; // path to local image or CDN
}

export const drivers2026: Driver2026[] = [
  // McLaren
  {
    id: 1,
    firstName: "Lando",
    lastName: "Norris",
    number: 4,
    team: "McLaren",
    nationality: "British",
    countryCode: "gb",
    age: 26,
    championships: 0,
    podiums: 15,
    image: "/images/drivers/norris.png",
  },
  {
    id: 2,
    firstName: "Oscar",
    lastName: "Piastri",
    number: 81,
    team: "McLaren",
    nationality: "Australian",
    countryCode: "au",
    age: 25,
    championships: 0,
    podiums: 10,
    image: "/images/drivers/piastri.png",
  },

  // Ferrari
  {
    id: 3,
    firstName: "Charles",
    lastName: "Leclerc",
    number: 16,
    team: "Ferrari",
    nationality: "Monégasque",
    countryCode: "mc",
    age: 28,
    championships: 0,
    podiums: 30,
    image: "/images/drivers/leclerc.png",
  },
  {
    id: 4,
    firstName: "Lewis",
    lastName: "Hamilton",
    number: 44,
    team: "Ferrari",
    nationality: "British",
    countryCode: "gb",
    age: 41,
    championships: 7,
    podiums: 197,
    image: "/images/drivers/hamilton.png",
  },

  // Mercedes
  {
    id: 5,
    firstName: "George",
    lastName: "Russell",
    number: 63,
    team: "Mercedes",
    nationality: "British",
    countryCode: "gb",
    age: 28,
    championships: 0,
    podiums: 12,
    image: "/images/drivers/russell.png",
  },
  {
    id: 6,
    firstName: "Kimi",
    lastName: "Antonelli",
    number: 12,
    team: "Mercedes",
    nationality: "Italian",
    countryCode: "it",
    age: 20,
    championships: 0,
    podiums: 0,
    image: "/images/drivers/antonelli.png",
  },

  // Red Bull
  {
    id: 7,
    firstName: "Max",
    lastName: "Verstappen",
    number: 1,
    team: "Red Bull",
    nationality: "Dutch",
    countryCode: "nl",
    age: 29,
    championships: 4,
    podiums: 100,
    image: "/images/drivers/verstappen.png",
  },

  // Williams
  {
    id: 8,
    firstName: "Alex",
    lastName: "Albon",
    number: 23,
    team: "Williams",
    nationality: "Thai",
    countryCode: "th",
    age: 30,
    championships: 0,
    podiums: 2,
    image: "/images/drivers/albon.png",
  },
  {
    id: 9,
    firstName: "Carlos",
    lastName: "Sainz",
    number: 55,
    team: "Williams",
    nationality: "Spanish",
    countryCode: "es",
    age: 32,
    championships: 0,
    podiums: 20,
    image: "/images/drivers/sainz.png",
  },

  // Aston Martin
  {
    id: 10,
    firstName: "Fernando",
    lastName: "Alonso",
    number: 14,
    team: "Aston Martin",
    nationality: "Spanish",
    countryCode: "es",
    age: 45,
    championships: 2,
    podiums: 106,
    image: "/images/drivers/alonso.png",
  },
  {
    id: 11,
    firstName: "Lance",
    lastName: "Stroll",
    number: 18,
    team: "Aston Martin",
    nationality: "Canadian",
    countryCode: "ca",
    age: 27,
    championships: 0,
    podiums: 3,
    image: "/images/drivers/stroll.png",
  },

  // Alpine
  {
    id: 12,
    firstName: "Pierre",
    lastName: "Gasly",
    number: 10,
    team: "Alpine",
    nationality: "French",
    countryCode: "fr",
    age: 30,
    championships: 0,
    podiums: 5,
    image: "/images/drivers/gasly.png",
  },

  // Haas
  {
    id: 13,
    firstName: "Esteban",
    lastName: "Ocon",
    number: 31,
    team: "Haas",
    nationality: "French",
    countryCode: "fr",
    age: 29,
    championships: 0,
    podiums: 3,
    image: "/images/drivers/ocon.png",
  },
  {
    id: 14,
    firstName: "Ollie",
    lastName: "Bearman",
    number: 38,
    team: "Haas",
    nationality: "British",
    countryCode: "gb",
    age: 21,
    championships: 0,
    podiums: 0,
    image: "/images/drivers/bearman.png",
  },
];

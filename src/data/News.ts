export interface NewsItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
}

export const newsData: NewsItem[] = [
  {
    id: 1,
    title: "F1 2026 Season Kicks Off with Exciting New Regulations",
    description:
      "The 2026 Formula 1 season has officially begun, and fans are buzzing with excitement over the new regulations that promise to shake up the grid. With a focus on sustainability and closer racing, teams have been hard at work developing their cars to meet the new standards. The season opener in Melbourne showcased some thrilling battles on track, setting the stage for what promises to be an unforgettable year in F1.",
    imageUrl: "./images/f1-2026-season.webp",
    date: "2026-03-15",
  },
  {
    id: 2,
    title: "Ferrari Unveils Their 2026 Challenger",
    description:
      "Ferrari has revealed their new car for the 2026 season, and it's already generating a lot of buzz. The SF26 features a sleek design and incorporates the latest aerodynamic innovations to comply with the new regulations. With a powerful hybrid engine and improved downforce, Ferrari is aiming to reclaim their position at the top of the podium this season.",
    imageUrl: "./images/ferrari.jpeg",
    date: "2026-02-20",
  },
  {
    id: 3,
    title: "McLaren's 2026 Car Promises a Return to Glory",
    description:
      "McLaren has unveiled their 2026 contender, the MCL26, which is packed with cutting-edge technology and a bold new design. The team has focused on maximizing aerodynamic efficiency while adhering to the new regulations. With a strong driver lineup and a competitive car, McLaren is looking to make a significant impact in the championship this year.",
    imageUrl: "./images/mclaren.jpeg",
    date: "2026-02-25",
  },
  {
    id: 4,
    title: "Aston Martin's 2026 Car Aims to Challenge the Top Teams",
    description:
      "Aston Martin has revealed their new car for the 2026 season, the AM26, which features a striking design and incorporates the latest technological advancements. The team has focused on improving aerodynamics and power unit performance to compete with the top teams. With a talented driver lineup and a competitive car, Aston Martin is looking to make a significant impact in the championship this year.",
    imageUrl: "./images/AM23_CAR.avif",
    date: "2026-02-27",
  },
  {
    id: 5,
    title: "Red Bull's 2026 Car Aims to Continue Dominance",
    description:
      "Red Bull Racing has unveiled their 2026 car, the RB26, which is designed to continue their dominance in the sport. With a focus on aerodynamics and power unit performance, Red Bull is confident that their new car will be a strong contender for the championship. The team has also made significant strides in sustainability, incorporating eco-friendly materials and technologies into their design.",
    imageUrl: "./images/red-bull.jpeg",
    date: "2026-02-28",
  },
  {
    id: 6,
    title: "Haas F1 Team Unveils Their 2026 Challenger",
    description:
      "Haas F1 Team has revealed their new car for the 2026 season, the VF-26, which features a striking design and incorporates the latest technological advancements. The team has focused on improving aerodynamics and power unit performance to compete with the top teams. With a talented driver lineup and a competitive car, Haas is looking to make a significant impact in the championship this year.",
    imageUrl: "./images/Haas-Hulk-3.avif",
    date: "2026-03-01",
  },
];

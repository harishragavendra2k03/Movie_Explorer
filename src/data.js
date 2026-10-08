
export const movieList = [
  {
    id: 1,
    title: "Leo",
    year: 2023,
    genre: "Action Thriller",
    rating: 8.4,
    plot: "A quiet café owner is forced to confront his violent past when a dangerous gang recognizes him as a legendary figure.",
    poster :"./src/Images/Leo.jpg"
  },
  {
    id: 2,
    title: "Thug Life",
    year: 2025,
    genre: "Action Crime",
    color: "#3b2f2f",
    plot: "A powerful gangster fights his way through betrayal, rival gangs, and a dangerous criminal empire.",
    poster: "./src/Images/Thuglife.jpg"
  },
  {
    id: 3,
    title: "Vikram",
    year: 2022,
    genre: "Action Thriller",
    rating: 8.6,
    plot: "A mysterious black-ops team takes on a powerful drug syndicate while uncovering a much larger conspiracy.",
    poster:"./src/Images/Vikram.jpg"
  },
  {
    id: 4,
    title: "Jailer",
    year: 2023,
    genre: "Action Comedy",
    rating: 7.5,
    plot: "A retired jailer is pulled back into action when his family becomes connected to a dangerous criminal network.",
    poster:"./src/Images/Jailer.webp"
  },
  {
    id: 5,
    title: "Kaithi",
    year: 2019,
    genre: "Action Thriller",
    rating: 8.4,
    plot: "A recently released prisoner gets one chance to meet his daughter but becomes trapped in a dangerous night-long police operation.",
    poster:"./src/Images/Kaithi.jpg"
  },
  {
    id: 6,
    title: "Master",
    year: 2021,
    genre: "Action Drama",
    rating: 7.8,
    plot: "An alcoholic professor is sent to a juvenile detention center where he takes on a powerful criminal exploiting young inmates.",
    poster:"./src/Images/Master.jpg"
  },
  {
    id: 7,
    title: "Jailer 2",
    year: 2026,
    genre: "Action",
    rating: 8.2,
    plot: "A legendary jailer returns to face a new threat that challenges everything he once protected.",
    poster:"./src/Images/Jailer2.jpeg"
  },
  {
    id: 8,
    title: "Salaar",
    year: 2023,
    genre: "Action Drama",
    rating: 8.1,
    plot: "Two childhood friends are separated by power and politics before being pulled into a brutal war for a kingdom.",
    poster:"./src/Images/Salaar.jpg"
  },
  {
    id: 9,
    title: "KGF: Chapter 2",
    year: 2022,
    genre: "Action Crime",
    rating: 8.4,
    plot: "Rocky rises to become the undisputed ruler of the Kolar Gold Fields while powerful enemies attempt to destroy his empire.",
    poster:"./src/Images/KGF2.jpg"
  },
  {
    id: 10,
    title: "Pushpa",
    year: 2021,
    genre: "Action Drama",
    rating: 7.6,
    plot: "A fearless laborer rises through the illegal red sandalwood trade and refuses to bow down to anyone.",
    poster:"./src/Images/pushpa.webp"
  },
  {
    id: 11,
    title: "RRR",
    year: 2022,
    genre: "Action Drama",
    rating: 8.0,
    plot: "Two legendary revolutionaries from different backgrounds join forces and challenge British rule in a story of friendship and sacrifice.",
    poster:"./src/Images/RRR.jpg"
  },
  {
    id: 12,
    title: "Kantara",
    year: 2022,
    genre: "Action Mystery",
    rating: 8.6,
    plot: "A village man's life becomes connected to ancient traditions, powerful landowners, and a mysterious spiritual force.",
    poster:"./src/Images/Kantara.jpg"
  }
];

export const genres = ["All", ...new Set(movieList.map((m) => m.genre))];
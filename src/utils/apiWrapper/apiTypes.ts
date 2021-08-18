/* eslint-disable camelcase */
const dumbMovieSummaryData = {
  adult: false,
  backdrop_path: "/rAgsOIhqRS6tUthmHoqnqh9PIAE.jpg",
  genre_ids: [28, 12, 14],
  id: 436969,
  original_language: "en",
  original_title: "The Suicide Squad",
  overview:
    "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.",
  popularity: 10312.289,
  poster_path: "/iCi4c4FvVdbaU1t8poH1gvzT6xM.jpg",
  release_date: "2021-07-28",
  title: "The Suicide Squad",
  video: false,
  vote_average: 8.1,
  vote_count: 2036,
};

const dumbMovieDetailedData = {
  adult: false,
  backdrop_path: "/rAgsOIhqRS6tUthmHoqnqh9PIAE.jpg",
  belongs_to_collection: {
    id: 531242,
    name: "Suicide Squad Collection",
    poster_path: "/bdgaCpdDh0J0H7ZRpDP2NJ8zxJE.jpg",
    backdrop_path: "/e0uUxFdhdGLcvy9eC7WlO2eLusr.jpg",
  },
  budget: 180000000,
  genres: [
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 14,
      name: "Fantasy",
    },
  ] as Genre[],
  homepage: "https://www.thesuicidesquad.net",
  id: 436969,
  imdb_id: "tt6334354",
  original_language: "en",
  original_title: "The Suicide Squad",
  overview:
    "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.",
  popularity: 10312.289,
  poster_path: "/iCi4c4FvVdbaU1t8poH1gvzT6xM.jpg",
  production_companies: [
    {
      id: 9993,
      logo_path: "/2Tc1P3Ac8M479naPp1kYT3izLS5.png",
      name: "DC Entertainment",
      origin_country: "US",
    },
    {
      id: 128064,
      logo_path: "/13F3Jf7EFAcREU0xzZqJnVnyGXu.png",
      name: "DC Films",
      origin_country: "US",
    },
    {
      id: 507,
      logo_path: "/z7H707qUWigbjHnJDMfj6QITEpb.png",
      name: "Atlas Entertainment",
      origin_country: "US",
    },
    {
      id: 429,
      logo_path: "/2Tc1P3Ac8M479naPp1kYT3izLS5.png",
      name: "DC Comics",
      origin_country: "US",
    },
    {
      id: 11565,
      logo_path: null,
      name: "The Safran Company",
      origin_country: "US",
    },
    {
      id: 174,
      logo_path: "/IuAlhI9eVC9Z8UQWOIDdWRKSEJ.png",
      name: "Warner Bros. Pictures",
      origin_country: "US",
    },
  ],
  production_countries: [
    {
      iso_3166_1: "US",
      name: "United States of America",
    },
  ],
  release_date: "2021-07-28",
  revenue: 80334747,
  runtime: 132,
  spoken_languages: [
    {
      english_name: "English",
      iso_639_1: "en",
      name: "English",
    },
    {
      english_name: "Spanish",
      iso_639_1: "es",
      name: "Español",
    },
  ],
  status: "Released",
  tagline: "They're dying to save the world.",
  title: "The Suicide Squad",
  video: false,
  vote_average: 8.1,
  vote_count: 2124,
};

export type Genre = {
  id: number;
  name: string;
};

export type MovieSummary = typeof dumbMovieSummaryData;

export type MovieDetailed = typeof dumbMovieDetailedData;

export type MovieResult = {
  page: number;
  results: MovieSummary[];
  total_pages: 500;
  total_results: 10000;
};

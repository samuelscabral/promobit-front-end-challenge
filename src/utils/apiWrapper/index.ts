import { Genre as MovieGenre, MovieDetailed, MovieList } from "./apiTypes";

const apiKey = process.env.REACT_APP_TMDB_API_KEY_V3 ?? "";
const language = "pt-BR";
const baseUrl = "https://api.themoviedb.org/3";

type Query = string | string[] | undefined;

function fillParams(params: { [key: string]: Query }) {
  const parsedParams = {} as { [key: string]: string };
  for (const [key, value] of Object.entries(params)) {
    if (!value) continue;
    if (typeof value === "string") parsedParams[key] = value;
    else parsedParams[key] = value?.join("%2C");
  }
  return new URLSearchParams(parsedParams);
}

export async function getAllMovies(page?: Query) {
  const params = fillParams({ api_key: apiKey, page, language });

  const response = await fetch(`${baseUrl}/movie/popular?` + params.toString());

  return ((await response.json()) as MovieList) ?? [];
}

export async function getFilteredMovies({
  page,
  genreCodes,
}: {
  page?: string;
  genreCodes?: string[];
}) {
  const params = fillParams({
    api_key: apiKey,
    sort_by: "popularity.desc",
    include_adult: "false",
    include_video: "false",
    page,
    language,
    with_genres: genreCodes,
  });

  const response = await fetch(
    `${baseUrl}/discover/movie?${params.toString()}`
  );

  return ((await response.json()) as MovieList) ?? [];
}

export async function getMovie(movieId: string) {
  const params = fillParams({ api_key: apiKey, language });
  const response = await fetch(
    `${baseUrl}/movie/${movieId}?${params.toString()}`
  );
  return (await response.json()) as MovieDetailed;
}

export async function getGenres() {
  const params = fillParams({ api_key: apiKey, language });
  const response = await fetch(
    `${baseUrl}/genre/movie/list?${params.toString()}`
  );
  return (await response.json()) as MovieGenre[];
}

import fillParams, { Query } from "utils/UrlParamsParse";
import { Genre as MovieGenre, MovieDetailed, MovieResult } from "./apiTypes";

const apiKey = process.env.REACT_APP_TMDB_API_KEY_V3 ?? "";
const language = "pt-BR";
const baseUrl = "https://api.themoviedb.org/3";

export async function getAllMovies(page?: Query) {
  const params = fillParams({ api_key: apiKey, page, language });

  const response = await fetch(`${baseUrl}/movie/popular?` + params.toString());

  return ((await response.json()) as MovieResult) ?? [];
}

export async function getFilteredMovies(page: Query, genreCodes: Query) {
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

  return ((await response.json()) as MovieResult) ?? [];
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
  console.log(`${baseUrl}/genre/movie/list?${params.toString()}`);

  const response = await fetch(
    `${baseUrl}/genre/movie/list?${params.toString()}`
  );

  return (await response.json()).genres as MovieGenre[];
}

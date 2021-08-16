import Header from "components/Header";
import MovieList from "components/MovieList";
import { useGenres } from "hooks/useGenres";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { getAllMovies, getFilteredMovies } from "utils/apiWrapper";
import { MovieResult } from "utils/apiWrapper/apiTypes";
import UrlParamsParse from "utils/UrlParamsParse";

interface MoviesProps {
  movieResult: MovieResult;
}

export default function Movies({ movieResult }: MoviesProps) {
  const { selectedGenresId } = useGenres();

  const router = useRouter();

  useEffect(() => {
    router.push(
      "/?" + UrlParamsParse({ page: 1, genre: selectedGenresId }).toString()
    );
  }, [selectedGenresId]);

  return (
    <>
      <Header />
      <main>
        <MovieList movies={movieResult.results} />
      </main>
    </>
  );
}

export async function getServerSideProps({
  query,
}: GetServerSidePropsContext): Promise<GetServerSidePropsResult<MoviesProps>> {
  const { page, genre } = query;

  const movieResult = genre
    ? await getFilteredMovies(page, genre)
    : await getAllMovies(page);

  return {
    props: {
      movieResult,
    },
  };
}

import Header from "components/Header";
import MovieList from "components/MovieList";
import PageController from "components/PageController";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import React from "react";
import { getAllMovies, getFilteredMovies } from "utils/apiWrapper";
import { MovieResult } from "utils/apiWrapper/apiTypes";

import classes from "./styles.module.scss";

interface MoviesProps {
  movieResult: MovieResult;
}

export default function Movies({ movieResult }: MoviesProps) {
  return (
    <>
      <Header />
      <main className={classes.container}>
        <MovieList movies={movieResult.results} />
        {movieResult.results.length > 0 && (
          <PageController totalPages={movieResult.total_pages} />
        )}
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

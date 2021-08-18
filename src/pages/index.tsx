import Header from "components/Header";
import MovieList from "components/MovieList";
import { useGenres } from "hooks/useGenres";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Button from "uiComponents/Button";
import { getAllMovies, getFilteredMovies } from "utils/apiWrapper";
import { MovieResult } from "utils/apiWrapper/apiTypes";
import UrlParamsParse from "utils/UrlParamsParse";

import classes from "./styles.module.scss";

interface MoviesProps {
  movieResult: MovieResult;
}

export default function Movies({ movieResult }: MoviesProps) {
  const { selectedGenresId } = useGenres();
  const router = useRouter();
  const { page } = router.query;
  const currentPage = typeof page === "string" ? +page : undefined;

  useEffect(() => {
    router.push(
      "/?" + UrlParamsParse({ page, genre: selectedGenresId }).toString()
    );
  }, [selectedGenresId]);

  function handleNextPage() {
    console.log(page);
    const nextPage = currentPage ? currentPage + 1 : 2;
    if (nextPage <= movieResult.total_pages)
      router.push(
        "/?" +
          UrlParamsParse({ page: nextPage, genre: selectedGenresId }).toString()
      );
  }

  function handlePrevPage() {
    if (currentPage && currentPage > 1)
      router.push(
        "/?" +
          UrlParamsParse({
            page: currentPage - 1,
            genre: selectedGenresId,
          }).toString()
      );
  }

  return (
    <>
      <Header />
      <main className={classes.container}>
        <MovieList movies={movieResult.results} />
        {movieResult.results.length > 0 && (
          <div className={classes.pageButtons}>
            <Button onClick={handlePrevPage}>Página Anterior</Button>
            <Button
              onClick={() => {
                handleNextPage();
              }}
            >
              Próxima Página
            </Button>
          </div>
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

import Header from "components/Header";
import MovieList from "components/MovieList";
import { useGenres } from "hooks/useGenres";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { getAllMovies, getFilteredMovies } from "utils/apiWrapper";
import { MovieResult } from "utils/apiWrapper/apiTypes";
import UrlParamsParse from "utils/UrlParamsParse";
import classes from "./styles.module.scss";
import { usePage } from "hooks/usePage";

interface MoviesProps {
  movieResult: MovieResult;
}

export default function Movies({ movieResult }: MoviesProps) {
  const { selectedGenresId } = useGenres();
  const { page, setPage } = usePage();

  const router = useRouter();

  useEffect(() => {
    router.push(
      "/?" + UrlParamsParse({ page, genre: selectedGenresId }).toString()
    );
  }, [selectedGenresId, page]);

  function handleNextPage() {
    const nextPage = page ? page + 1 : 2;
    if (nextPage <= movieResult.total_pages) setPage(nextPage);
  }

  function handlePreviousPage() {
    const nextPage = page ? page - 1 : 2;
    if (nextPage > 0) setPage(nextPage);
  }

  return (
    <>
      <Header />
      <main className={classes.container}>
        <MovieList movies={movieResult.results} />
        {movieResult.results.length > 0 && (
          <div className={classes.pageButtons}>
            <button onClick={handlePreviousPage}>Página Anterior</button>
            <button onClick={handleNextPage}>Próxima Página</button>
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

import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import { getAllMovies, getMovie } from "utils/apiWrapper";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import { MovieDetailed } from "utils/apiWrapper/apiTypes";
import Header from "components/Header";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/router";

import classes from "./styles.module.scss";
import MovieDetails from "components/MovieDetails";

export interface MovieProps {
  movie: MovieDetailed;
}

export default function Movies({ movie }: MovieProps) {
  const router = useRouter();

  return (
    <>
      <Header />
      <main className={classes.main}>
        <div className={classes.container}>
          <IoMdArrowRoundBack
            className={classes.backArrow}
            onClick={() => router.back()}
          />
          <MovieDetails movie={movie} />
        </div>
      </main>
    </>
  );
}

interface PageParams extends ParsedUrlQuery {
  movieId: string;
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<PageParams>): Promise<
  GetStaticPropsResult<MovieProps>
> {
  const movieId = params?.movieId;

  if (!movieId)
    return {
      notFound: true,
    };

  const movie = await getMovie(movieId);

  if (!movie)
    return {
      notFound: true,
    };

  return {
    props: {
      movie,
    },
    revalidate: 60 * 60 * 24,
  };
}

export async function getStaticPaths(): Promise<
  GetStaticPathsResult<PageParams>
> {
  const movieList = await getAllMovies();
  const paths = movieList.results.map((movie) => ({
    params: {
      movieId: movie.id.toString(),
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

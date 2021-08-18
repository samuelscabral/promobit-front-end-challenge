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
import Tag from "uiComponents/Tag";

export interface MovieProps {
  movie: MovieDetailed;
}

export default function Movies({ movie }: MovieProps) {
  const router = useRouter();

  return (
    <>
      <Header />
      <main className={classes.container}>
        <div key={movie.id}>
          <span onClick={() => router.back()}>
            <IoMdArrowRoundBack />
          </span>
          {movie.backdrop_path}
          {movie.poster_path}
          <div>
            <div>
              <span>{movie.title}</span>
              <span> {movie.tagline}</span>
            </div>
            <div>
              {movie.vote_average}
              {movie.vote_count}
            </div>
          </div>
          <div>
            <span>{movie.budget}</span>
            <span>{movie.revenue}</span>
          </div>
          {`${movie.runtime} | ${movie.release_date}  | ${movie.status} `}
          <div>
            {movie.genres.map((genre) => (
              <Tag key={genre.id}>{genre.name}</Tag>
            ))}
          </div>
          {
            // movie.genres
          }
          {movie.overview}
          {movie.popularity}
          {movie.production_companies.map((companie) => (
            <Tag key={companie.id}>{companie.name}</Tag>
          ))}
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

import { MovieSummary } from "utils/apiWrapper/apiTypes";
import classes from "./styles.module.scss";
import React from "react";
import MovieCardContent from "./MovieCardContent";
import Link from "next/link";

interface MovieCardProps {
  movie: MovieSummary;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className={classes.movieCard}>
      <Link href={`/movie/${movie.id}`}>
        <a className={classes.content}>
          <MovieCardContent movie={movie} />
        </a>
      </Link>
      <div className={classes.footer}></div>
    </div>
  );
}

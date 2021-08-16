import { MovieSummary } from "utils/apiWrapper/apiTypes";
import classes from "./styles.module.scss";
import React from "react";
import MovieCardContent from "./MovieCardContent";

interface MovieCardProps {
  movie: MovieSummary;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className={classes.movieCard}>
      <MovieCardContent movie={movie} />
      <div className={classes.footer}></div>
    </div>
  );
}

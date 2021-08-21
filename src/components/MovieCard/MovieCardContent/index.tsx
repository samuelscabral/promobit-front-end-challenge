import { MovieSummary } from "utils/apiWrapper/apiTypes";
import classes from "./styles.module.scss";
import React from "react";
import CardImage from "./CardImage";

interface MovieCardProps {
  movie: MovieSummary;
}

export default function MovieCardContent({ movie }: MovieCardProps) {
  return (
    <div className={classes.container}>
      <CardImage movie={movie} />
      <div className={classes.details}>
        <h2 className={classes.title}>{movie.title}</h2>
        <p className={classes.overview}>{movie.overview}</p>
      </div>
    </div>
  );
}

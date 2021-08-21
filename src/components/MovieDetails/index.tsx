import React from "react";
import { MovieDetailed } from "utils/apiWrapper/apiTypes";
import classes from "./styles.module.scss";
import Tag from "uiComponents/Tag";
import Image from "next/image";
import PercentageCircle from "uiComponents/PercentageCircle";

export interface MovieDetailsProps {
  movie: MovieDetailed;
}

export default function MovieDetails({ movie }: MovieDetailsProps) {
  return (
    <div className={classes.movie}>
      <div className={classes.leftContainer}>
        <div className={classes.imageContainer}>
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            layout="fill"
            alt={`capa de ${movie.title}`}
          />
        </div>
        <div className={classes.tags}>
          {movie.production_companies.map((companie) => (
            <Tag key={companie.id}>{companie.name}</Tag>
          ))}
        </div>
      </div>
      <div className={classes.details}>
        <div className={classes.header}>
          <div>
            <h1>{movie.title}</h1>
            {movie.tagline && <h2> {movie.tagline}</h2>}
            <span className={classes.status}>
              {`${movie.runtime}m | ${movie.release_date}  | ${movie.status} `}
            </span>
          </div>
          <div>
            <PercentageCircle
              percentage={movie.vote_average * 10}
              display={movie.vote_average}
              className={classes.noteCircle}
            />
          </div>
        </div>
        <div>
          {movie.genres.map((genre) => (
            <Tag key={genre.id}>{genre.name}</Tag>
          ))}
        </div>

        <div className={classes.overview}>{movie.overview}</div>
      </div>
    </div>
  );
}

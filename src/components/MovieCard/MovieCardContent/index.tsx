import { MovieSummary } from "utils/apiWrapper/apiTypes";
import classes from "./styles.module.scss";
import Image from "next/image";

interface MovieCardProps {
  movie: MovieSummary;
}

export default function MovieCardContent({ movie }: MovieCardProps) {
  return (
    <div className={classes.contentContainer}>
      <div className={classes.imageContainer}>
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          height={192}
          width={192}
          alt={`capa de ${movie.title}`}
          className={classes.image}
        />
      </div>
      <div className={classes.details}>
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}

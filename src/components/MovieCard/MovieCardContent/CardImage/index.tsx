import { MovieSummary } from "utils/apiWrapper/apiTypes";
import classes from "./styles.module.scss";
import Image from "next/image";

interface CardImageProps {
  movie: MovieSummary;
}

export default function CardImage({ movie }: CardImageProps) {
  return (
    <div className={classes.container}>
      <div className={classes.image}>
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          layout="fill"
          alt={`capa de ${movie.title}`}
        />
      </div>
    </div>
  );
}

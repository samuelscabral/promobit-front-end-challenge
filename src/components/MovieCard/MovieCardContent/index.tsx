import { MovieSummary } from "utils/apiWrapper/apiTypes";
import classes from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";

interface MovieCardProps {
  movie: MovieSummary;
}

export default function MovieCardContent({ movie }: MovieCardProps) {
  return (
    <Link href={`/movie/${movie.id}`}>
      <a className={classes.content}>
        <div className={classes.image}>
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            layout="fill"
            alt={`capa de ${movie.title}`}
          />
        </div>
        <div className={classes.details}> {movie.title}</div>
      </a>
    </Link>
  );
}

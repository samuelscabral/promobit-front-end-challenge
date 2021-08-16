import MovieCard from "components/MovieCard";
import { MovieSummary } from "utils/apiWrapper/apiTypes";
import classes from "./styles.module.scss";

interface MoviesProps {
  movies: MovieSummary[];
}

export default function Movies({ movies }: MoviesProps) {
  return (
    <div className={classes.movieList}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

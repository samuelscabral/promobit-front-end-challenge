import MovieCard from "components/MovieCard";
import { MovieSummary } from "utils/apiWrapper/apiTypes";
import classes from "./styles.module.scss";

import { BsFilterRight } from "react-icons/bs";
import React from "react";
import GenreFilterModal from "components/GenreFilterModal";

interface MoviesProps {
  movies: MovieSummary[];
}

export default function Movies({ movies }: MoviesProps) {
  return (
    <>
      <div className={classes.listHeader}>
        <span>Filmes Populares</span>
        <GenreFilterModal>
          Filtrar
          <BsFilterRight />
        </GenreFilterModal>
      </div>
      <div className={classes.movieList}>
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p>
            Não foi possível encontrar filmes com os filtros escolhidos. Tente
            novamente com outros filtros
          </p>
        )}
      </div>
    </>
  );
}

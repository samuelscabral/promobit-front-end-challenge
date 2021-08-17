import MovieCard from "components/MovieCard";
import { MovieSummary } from "utils/apiWrapper/apiTypes";
import classes from "./styles.module.scss";

import { BsFilterRight } from "react-icons/bs";
import React from "react";
import FilterModal from "components/Header/FilterModal";

interface MoviesProps {
  movies: MovieSummary[];
}

export default function Movies({ movies }: MoviesProps) {
  const [filterOpen, setFilterOpen] = React.useState(false);

  function HandleFilterOpen() {
    setFilterOpen(!filterOpen);
  }

  function HandleFilterClose() {
    setFilterOpen(false);
  }

  return (
    <>
      <div className={classes.listHeader}>
        <span>Filmes Populares</span>
        <button onClick={HandleFilterOpen}>
          <BsFilterRight />
        </button>
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
      <FilterModal open={filterOpen} onRequestClose={HandleFilterClose} />
    </>
  );
}

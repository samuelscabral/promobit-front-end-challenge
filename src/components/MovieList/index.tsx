import MovieCard from "components/MovieCard";
import { MovieSummary } from "utils/apiWrapper/apiTypes";
import classes from "./styles.module.scss";

import { BsFilterRight } from "react-icons/bs";
import React from "react";
import GenreFilterModal from "components/GenreFilterModal";
import { useGenres } from "hooks/useGenres";
import Tag from "uiComponents/Tag";

interface MoviesProps {
  movies: MovieSummary[];
}

export default function Movies({ movies }: MoviesProps) {
  const { selectedGenresId, genres } = useGenres();
  return (
    <>
      <div className={classes.listHeader}>
        <span>Filmes Populares</span>
        <div className={classes.filter}>
          <span>Filtrar</span>
          <GenreFilterModal>
            <BsFilterRight className={classes.filterButton} />
          </GenreFilterModal>
        </div>
      </div>
      <div className={classes.genres}>
        {selectedGenresId.map((genreID) => {
          const genre = genres.find((g) => g.id === genreID);
          return genre && <Tag key={genre.id}>{genre.name}</Tag>;
        })}
      </div>

      {movies.length > 0 ? (
        <div className={classes.movieList}>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p className={classes.canNotFound}>
          Não foi possível encontrar filmes com os filtros escolhidos. Tente
          novamente com outros filtros
        </p>
      )}
    </>
  );
}

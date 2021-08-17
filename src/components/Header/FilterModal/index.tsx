import { useGenres } from "hooks/useGenres";
import React, { useEffect } from "react";
import ReactModal from "react-modal";
import classes from "./styles.module.scss";

interface FilterModalProps {
  open: boolean;
  onRequestClose: () => void;
}

export default function FilterModal({
  open,
  onRequestClose,
}: FilterModalProps) {
  const { genres, selectedGenresId, setSelectedGenresId } = useGenres();
  const [genresId, setGenresId] = React.useState(selectedGenresId);

  function handleGenreClick(id: number) {
    if (!genresId.includes(id)) {
      setGenresId([...genresId, id]);
    } else {
      setGenresId(genresId.filter((value) => value !== id));
    }
  }

  function handleReset() {
    setSelectedGenresId([]);
    onRequestClose();
  }

  useEffect(() => {
    setGenresId([...selectedGenresId]);
  }, [selectedGenresId]);

  return (
    <ReactModal
      isOpen={open}
      contentLabel="onRequestClose Example"
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
      className={classes.modal}
      overlayClassName={classes.overlay}
    >
      <div className={classes.container}>
        <div className={classes.genres}>
          {genres.map((genre) => (
            <button
              key={genre.id}
              onClick={() => handleGenreClick(genre.id)}
              className={`${classes.movieTag} ${
                genresId.includes(genre.id) ? classes.selectedTag : ""
              }`}
            >
              {genre.name}
            </button>
          ))}
        </div>
        <div className={classes.actions}>
          <button
            className={classes.button + " " + classes.resetButton}
            onClick={handleReset}
          >
            Resetar Filtros
          </button>
          <button className={classes.button} onClick={onRequestClose}>
            Cancelar
          </button>
          <button
            className={classes.button}
            onClick={() => {
              setSelectedGenresId([...genresId]);
              onRequestClose();
            }}
          >
            Buscar
          </button>
        </div>
      </div>
    </ReactModal>
  );
}

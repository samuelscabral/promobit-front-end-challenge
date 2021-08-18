import { useGenres } from "hooks/useGenres";
import React, { useEffect } from "react";
import ReactModal from "react-modal";
import Button from "uiComponents/Button";
import Tag from "uiComponents/Tag";
import classes from "./styles.module.scss";

interface GenreFilterModalProps {
  children?: React.ReactNode;
}

export default function GenreFilterModal({ children }: GenreFilterModalProps) {
  const { genres, selectedGenresId, setSelectedGenresId } = useGenres();
  const [genresId, setGenresId] = React.useState(selectedGenresId);
  const [open, setOpen] = React.useState(false);

  function handleGenreClick(id: number) {
    if (!genresId.includes(id)) {
      setGenresId([...genresId, id]);
    } else {
      setGenresId(genresId.filter((value) => value !== id));
    }
  }

  function handleReset() {
    setSelectedGenresId([]);
    setOpen(false);
  }

  useEffect(() => {
    setGenresId([...selectedGenresId]);
  }, [selectedGenresId]);

  function HandleFilterOpen() {
    setOpen(!open);
  }

  function HandleFilterClose() {
    setGenresId([...selectedGenresId]);
    setOpen(false);
  }

  return (
    <>
      <span onClick={HandleFilterOpen}>{children}</span>
      <ReactModal
        isOpen={open}
        contentLabel="onRequestClose Example"
        onRequestClose={HandleFilterClose}
        shouldCloseOnOverlayClick={true}
        ariaHideApp={false}
        className={classes.modal}
        overlayClassName={classes.overlay}
      >
        <div className={classes.container}>
          <span>Selecione os gêneros de filme desejados:</span>
          <div className={classes.genres}>
            {genres.map((genre) => (
              <Tag
                key={genre.id}
                onClick={() => handleGenreClick(genre.id)}
                className={`${
                  genresId.includes(genre.id) ? classes.selectedTag : ""
                }`}
              >
                {genre.name}
              </Tag>
            ))}
          </div>
          <div className={classes.actions}>
            <Button
              className={classes.button + " " + classes.resetButton}
              onClick={handleReset}
            >
              Resetar Filtros
            </Button>
            <Button className={classes.button} onClick={HandleFilterClose}>
              Cancelar
            </Button>
            <Button
              className={classes.button}
              onClick={() => {
                setSelectedGenresId([...genresId]);
                HandleFilterClose();
              }}
            >
              Buscar
            </Button>
          </div>
        </div>
      </ReactModal>
    </>
  );
}

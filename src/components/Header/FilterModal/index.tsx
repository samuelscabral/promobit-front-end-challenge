import { useGenres } from "hooks/useGenres";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import ReactModal from "react-modal";
import UrlParamsParse from "utils/UrlParamsParse";

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

  return (
    <ReactModal
      isOpen={open}
      contentLabel="onRequestClose Example"
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
    >
      {genres.map((genre) => (
        <button key={genre.id} onClick={() => handleGenreClick(genre.id)}>
          {genresId.includes(genre.id) && "V"} {genre.name}
        </button>
      ))}

      <button
        onClick={() => {
          setSelectedGenresId([...genresId]);
          onRequestClose();
        }}
      >
        Buscar
      </button>
    </ReactModal>
  );
}

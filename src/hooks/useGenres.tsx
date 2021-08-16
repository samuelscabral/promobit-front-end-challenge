import { useContext } from "react";
import { GenresContext } from "contexts/GenresContext";

export function useGenres() {
  const value = useContext(GenresContext);
  return value;
}

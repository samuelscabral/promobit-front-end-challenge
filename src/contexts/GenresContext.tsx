import React, { createContext, useState, useEffect } from "react";
import { Genre } from "utils/apiWrapper/apiTypes";

interface GenreContextType {
  genres: Genre[];
  selectedGenresId: number[];
  setSelectedGenresId: (selectedGenresId: number[]) => void;
}

export const GenresContext = createContext({} as GenreContextType);

interface GenresContextProviderProps {
  children: React.ReactNode;
}

export function GenresContextProvider({
  children,
}: GenresContextProviderProps) {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [selectedGenresId, setSelectedGenresId] = useState<number[]>([]);

  useEffect(() => {
    async function getGenres() {
      const data = await fetch("/api/genres");
      setGenres((await data.json()).genres);
    }
    getGenres();
  }, []);

  return (
    <GenresContext.Provider
      value={{ genres, selectedGenresId, setSelectedGenresId }}
    >
      {children}
    </GenresContext.Provider>
  );
}

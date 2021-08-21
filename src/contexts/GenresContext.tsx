import { useRouter } from "next/router";
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

function getGenresId(genres: string | string[] | undefined) {
  if (!genres) return [];
  if (typeof genres === "string") return [+genres];
  return genres.map(Number);
}

export function GenresContextProvider({
  children,
}: GenresContextProviderProps) {
  const router = useRouter();
  const { genre } = router.query;
  const [genres, setGenres] = useState<Genre[]>([]);

  const [selectedGenresId, setSelectedGenresId] = useState<number[]>(
    getGenresId(genre)
  );

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

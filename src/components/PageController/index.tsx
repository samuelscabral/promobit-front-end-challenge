import { useGenres } from "hooks/useGenres";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Button from "uiComponents/Button";
import UrlParamsParse from "utils/UrlParamsParse";
import classes from "./styles.module.scss";

interface PageControllerProps {
  totalPages: number;
}

export default function PageController({ totalPages }: PageControllerProps) {
  const { selectedGenresId } = useGenres();
  const router = useRouter();
  const { page } = router.query;
  const currentPage = typeof page === "string" ? +page : undefined;

  useEffect(() => {
    router.push(
      "/?" + UrlParamsParse({ page, genre: selectedGenresId }).toString()
    );
  }, [selectedGenresId]);

  function handleNextPage() {
    const nextPage = currentPage ? currentPage + 1 : 2;
    if (nextPage <= totalPages)
      router.push(
        "/?" +
          UrlParamsParse({ page: nextPage, genre: selectedGenresId }).toString()
      );
  }

  function handlePrevPage() {
    if (currentPage && currentPage > 1)
      router.push(
        "/?" +
          UrlParamsParse({
            page: currentPage - 1,
            genre: selectedGenresId,
          }).toString()
      );
  }

  return (
    <div className={classes.pageButtons}>
      <Button disabled={(currentPage ?? 0) <= 1} onClick={handlePrevPage}>
        Página Anterior
      </Button>
      {`${currentPage ?? 1}`}
      <Button
        disabled={(currentPage ?? 0) >= totalPages}
        onClick={() => {
          handleNextPage();
        }}
      >
        Próxima Página
      </Button>
    </div>
  );
}

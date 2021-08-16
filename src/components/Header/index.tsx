import Link from "next/link";
import React from "react";
import classes from "./styles.module.scss";
import { BsFilterRight } from "react-icons/bs";
import { IoMdArrowRoundBack } from "react-icons/io";
import FilterModal from "./FilterModal";
import { useRouter } from "next/router";
import { useGenres } from "hooks/useGenres";
import UrlParamsParse from "utils/UrlParamsParse";

export default function Header() {
  const router = useRouter();
  const [filterOpen, setFilterOpen] = React.useState(false);

  const { selectedGenresId } = useGenres();
  function HandleFilterOpen() {
    setFilterOpen(!filterOpen);
  }

  function HandleFilterClose() {
    setFilterOpen(false);
  }

  return (
    <header className={classes.header}>
      {router.pathname === "/" ? (
        <span></span>
      ) : (
        <button onClick={() => router.back()}>
          <IoMdArrowRoundBack />
        </button>
      )}

      <Link
        href={
          "/?" + UrlParamsParse({ page: 1, genre: selectedGenresId }).toString()
        }
      >
        <a>Promomovie</a>
      </Link>
      {router.pathname === "/" ? (
        <button onClick={HandleFilterOpen}>
          <BsFilterRight />
        </button>
      ) : (
        <span></span>
      )}

      <FilterModal open={filterOpen} onRequestClose={HandleFilterClose} />
    </header>
  );
}

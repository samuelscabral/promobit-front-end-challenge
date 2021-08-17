import Link from "next/link";
import React from "react";
import classes from "./styles.module.scss";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/router";
import { useGenres } from "hooks/useGenres";
import UrlParamsParse from "utils/UrlParamsParse";
import { MdLocalMovies } from "react-icons/md";

export default function Header() {
  const router = useRouter();

  const { selectedGenresId } = useGenres();
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        {router.pathname === "/" ? (
          <span></span>
        ) : (
          <button onClick={() => router.back()}>
            <IoMdArrowRoundBack />
          </button>
        )}

        <Link
          href={
            "/?" +
            UrlParamsParse({ page: 1, genre: selectedGenresId }).toString()
          }
        >
          <a className={classes.logo}>
            <MdLocalMovies />
            Promomovie
          </a>
        </Link>

        <span></span>
      </div>
    </header>
  );
}

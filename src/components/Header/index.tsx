import Link from "next/link";
import React from "react";
import classes from "./styles.module.scss";
import UrlParamsParse from "utils/UrlParamsParse";
import { MdLocalMovies } from "react-icons/md";

export default function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Link href={"/?" + UrlParamsParse({ page: 1 }).toString()}>
          <a className={classes.logo}>
            <MdLocalMovies />
            Promomovie
          </a>
        </Link>
      </div>
    </header>
  );
}

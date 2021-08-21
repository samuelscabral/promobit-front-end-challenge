import React, { HTMLAttributes } from "react";
import classes from "./styles.module.scss";

interface TagProps extends HTMLAttributes<HTMLSpanElement> {}

export default function Tag({ ...rest }: TagProps) {
  return (
    <span {...rest} className={`${classes.movieTag} ${rest.className ?? ""}`} />
  );
}

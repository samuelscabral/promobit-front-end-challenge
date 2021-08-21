import React, { ButtonHTMLAttributes } from "react";
import classes from "./styles.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ ...rest }: ButtonProps) {
  return <button {...rest} className={`${classes.button} ${rest.className}`} />;
}

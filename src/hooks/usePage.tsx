import { useContext } from "react";
import { PageContext } from "contexts/PageContext";

export function usePage() {
  const value = useContext(PageContext);
  return value;
}

import "styles/globals.css";
import "styles/lightTheme.scss";
import type { AppProps } from "next/app";
import { GenresContextProvider } from "contexts/GenresContext";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GenresContextProvider>
      <Component {...pageProps} />
    </GenresContextProvider>
  );
}

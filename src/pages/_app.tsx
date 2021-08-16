import "../styles/globals.css";
import type { AppProps } from "next/app";
import { GenresContextProvider } from "contexts/GenresContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GenresContextProvider>
      <Component {...pageProps} />
    </GenresContextProvider>
  );
}
export default MyApp;

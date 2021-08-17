import "../styles/globals.css";
import type { AppProps } from "next/app";
import { GenresContextProvider } from "contexts/GenresContext";
import React from "react";
import { PageContextProvider } from "contexts/PageContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GenresContextProvider>
      <PageContextProvider>
        <Component {...pageProps} />
      </PageContextProvider>
    </GenresContextProvider>
  );
}
export default MyApp;

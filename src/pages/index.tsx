import MovieList from "components/MovieList";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { getAllMovies } from "utils/apiWrapper";
import { MovieResult } from "utils/apiWrapper/apiTypes";

interface MoviesProps {
  movieResult: MovieResult;
}

export default function Movies({ movieResult }: MoviesProps) {
  return <MovieList movies={movieResult.results} />;
}

export async function getServerSideProps({
  query,
}: GetServerSidePropsContext): Promise<GetServerSidePropsResult<MoviesProps>> {
  const { page } = query;
  const movieResult = await getAllMovies(page);

  return {
    props: {
      movieResult,
    },
  };
}

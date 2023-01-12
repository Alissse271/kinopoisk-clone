import { Filters, MovieList } from "components";
import { transrormMovies } from "mappers";
import { useEffect } from "react";
import { fetchMovies, getAllMovies, useAppDispatch, useAppSelector } from "store";
import { Container, LoadingText } from "./styles";

export const HomePage = () => {
  const { isLoading, movies } = useAppSelector(getAllMovies);
  const dispatch = useAppDispatch();
  const transrormedMovies = transrormMovies(movies);
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  return (
    <Container>
      {isLoading && <LoadingText>Loading...</LoadingText>}
      {movies && movies.length > 0 && <MovieList movies={transrormedMovies} />}
    </Container>
  );
};

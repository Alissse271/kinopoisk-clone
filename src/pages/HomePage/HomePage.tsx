import { Loader, MovieList } from "components";
import { transrormMovies } from "mappers";
import { useEffect } from "react";
import { fetchMovies, getAllMovies, useAppDispatch, useAppSelector } from "store";
import { Container, ErrorText } from "./styles";

export const HomePage = () => {
  const { isLoading, movies, error } = useAppSelector(getAllMovies);
  const dispatch = useAppDispatch();
  const transrormedMovies = transrormMovies(movies);
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  return (
    <Container>
      <Loader loading={isLoading} />
      {movies && movies.length > 0 && <MovieList movies={transrormedMovies} />}
      {error && <ErrorText>Loading...</ErrorText>}
    </Container>
  );
};

import { Loader, MovieList } from "components";
import { useEffect } from "react";
import { fetchMovies, getAllMovies, useAppDispatch, useAppSelector } from "store";
import { Container, ErrorText } from "./styles";

export const HomePage = () => {
  const { isLoading, movies, error } = useAppSelector(getAllMovies);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  return (
    <Container>
      <Loader loading={isLoading} />
      {movies && movies.length > 0 && <MovieList movies={movies} />}
      {error && <ErrorText>Loading...</ErrorText>}
    </Container>
  );
};

import { MovieList } from "components";
import { useWindowSize } from "hooks";
import { transrormMovies } from "mappers";
import { useEffect } from "react";
import { useAppSelector, getAllMovies, useAppDispatch, fetchMovies } from "store";
import { Container, LoadingText, StyledTitle } from "./styles";

export const TrendsPage = () => {
  const { isLoading, movies } = useAppSelector(getAllMovies);
  const dispatch = useAppDispatch();
  const transrormedMovies = transrormMovies(movies);
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  const { width = 0 } = useWindowSize();
  return (
    <Container>
      {width < 1440 && <StyledTitle label="Trends" />}
      {isLoading && <LoadingText>Loading...</LoadingText>}
      {movies && movies.length > 0 && <MovieList trends movies={transrormedMovies} />}
    </Container>
  );
};

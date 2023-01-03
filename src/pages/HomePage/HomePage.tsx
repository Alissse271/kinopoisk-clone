import { MovieList } from "components";
import { transrormMovies } from "mappers";
import { useEffect } from "react";
import { fetchMovies, getAllMovies, useAppDispatch, useAppSelector } from "store";
// import { Container } from "./styles";

export const HomePage = () => {
  const { isLoading, movies } = useAppSelector(getAllMovies);
  const dispatch = useAppDispatch();
  const transrormedMovies = transrormMovies(movies);
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {/* <Container> */}
      {movies && <MovieList movies={transrormedMovies} />}
      {/* </Container> */}
    </>
  );
};

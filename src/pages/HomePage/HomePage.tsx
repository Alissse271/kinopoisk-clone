import { Loader, MovieList } from "components";
import { useEffect, useState } from "react";
import { fetchMoreMovies, fetchMovies, getAllMovies, useAppDispatch, useAppSelector } from "store";
import { Container, ErrorText, StyledShowMoreButton } from "./styles";

export const HomePage = () => {
  const { isLoading, movies, error, isLoadingMoreMovies, page } = useAppSelector(getAllMovies);
  const dispatch = useAppDispatch();
  const [pageNumber, setPageNumber] = useState(page + 1);

  const handleShowMoreMovies = () => {
    setPageNumber(pageNumber + 1);
    // dispatch(fetchMovies(pageNumber.toString()));
    dispatch(fetchMoreMovies(pageNumber.toString()));
  };

  // useEffect(() => {
  //   dispatch(fetchMovies(page.toString()));
  // }, [dispatch, page]);
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  return (
    <Container>
      {isLoading && <Loader loading={isLoading} />}
      {error && <ErrorText>No such movies</ErrorText>}
      {movies && movies.length > 0 && (
        <>
          <MovieList movies={movies} />
          <StyledShowMoreButton
            onClick={handleShowMoreMovies}
            isLoadingMoreMovies={isLoadingMoreMovies}
          />
        </>
      )}
    </Container>
  );
};

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
    dispatch(fetchMoreMovies(pageNumber.toString()));
  };

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  return (
    <Container>
      <Loader loading={isLoading} />
      {movies && movies.length > 0 && (
        <>
          <MovieList movies={movies} />
          <StyledShowMoreButton
            onClick={handleShowMoreMovies}
            isLoadingMoreMovies={isLoadingMoreMovies}
          />
        </>
      )}
      {error && <ErrorText>Loading...</ErrorText>}
    </Container>
  );
};

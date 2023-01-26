import { MovieList } from "components";
import { useEffect, useState } from "react";
import { fetchMoreMovies, fetchMovies, getAllMovies, useAppDispatch, useAppSelector } from "store";
import { Container, ErrorText, StyledLoader, StyledShowMoreButton } from "./styles";

export const HomePage = () => {
  const { isLoading, movies, error, isLoadingMoreMovies, page, isFoundMovies } =
    useAppSelector(getAllMovies);
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
      {isLoading && <StyledLoader loading={isLoading} />}
      {error && <ErrorText>No such movies</ErrorText>}
      {isFoundMovies && movies && movies.length > 0 && (
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

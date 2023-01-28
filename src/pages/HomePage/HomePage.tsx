import { MovieList } from "components";
import { useEffect } from "react";
import { useMatch } from "react-router-dom";
import { ROUTE } from "router";
import { fetchMovies, getAllMovies, resetMovies, useAppDispatch, useAppSelector } from "store";
import { createNextPage } from "store";
import { Container, ErrorText, StyledLoader, StyledShowMoreButton } from "./styles";

export const HomePage = () => {
  const { isLoading, movies, error, isLoadingMoreMovies, page, isFoundMovies } =
    useAppSelector(getAllMovies);
  const dispatch = useAppDispatch();
  const isHomePage = useMatch(ROUTE.HOME);

  useEffect(() => {
    if (isHomePage) dispatch(resetMovies());
    if (isHomePage) dispatch(createNextPage(false));
  }, [dispatch, isHomePage]);

  const handleShowMoreMovies = () => {
    dispatch(createNextPage(true));
  };

  useEffect(() => {
    dispatch(fetchMovies({ page }));
  }, [dispatch, page]);

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

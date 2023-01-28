import { MovieList } from "components";
import { useEffect } from "react";
import { useMatch } from "react-router-dom";
import { ROUTE } from "router";
import {
  createNextPage,
  createNextSearchPage,
  fetchMoviesBySearch,
  getMoviesBySearch,
  resetSearchMovies,
  useAppDispatch,
  useAppSelector,
} from "store";

import { Container, ErrorText, StyledLoader, StyledShowMoreButton } from "./styles";

export const SearchPage = () => {
  const { isLoading, movies, error, isLoadingMoreMovies, isFoundMovies, searchValue } =
    useAppSelector(getMoviesBySearch);
  const dispatch = useAppDispatch();

  const isSearchPage = useMatch(ROUTE.SEARCH);

  useEffect(() => {
    if (isSearchPage) dispatch(resetSearchMovies());
    if (isSearchPage) dispatch(createNextPage(false));
  }, [dispatch, isSearchPage]);

  const handleShowMoreMovies = () => {
    dispatch(createNextSearchPage(true));
  };

  useEffect(() => {
    if (searchValue.s || searchValue.y) dispatch(fetchMoviesBySearch(searchValue));
  }, [searchValue]);

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

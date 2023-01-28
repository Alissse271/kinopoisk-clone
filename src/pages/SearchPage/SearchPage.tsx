import { MovieList } from "components";
import { useEffect } from "react";
import {
  createNextSearchPage,
  fetchMoviesBySearch,
  getMoviesBySearch,
  useAppDispatch,
  useAppSelector,
} from "store";

import { Container, ErrorText, StyledLoader, StyledShowMoreButton } from "./styles";

export const SearchPage = () => {
  const { isLoading, movies, error, isLoadingMoreMovies, isFoundMovies, searchValue } =
    useAppSelector(getMoviesBySearch);
  const dispatch = useAppDispatch();

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

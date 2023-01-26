import { MovieInfo } from "components";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieInfo, getMovieInfo, useAppDispatch, useAppSelector } from "store";
import { Container, ErrorText, LoadingText } from "./styles";

export const MovieInfoPage = () => {
  const { movieInfo, isLoading, error } = useAppSelector(getMovieInfo);
  const dispatch = useAppDispatch();
  const { imdb = "" } = useParams();

  useEffect(() => {
    dispatch(fetchMovieInfo(imdb));
  }, [dispatch, imdb]);

  return (
    <Container>
      {isLoading && <LoadingText>Loading</LoadingText>}
      {error && <ErrorText>Error</ErrorText>}
      {movieInfo && <MovieInfo movie={movieInfo} />}
    </Container>
  );
};

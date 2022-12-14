import { MovieInfo } from "components";
import { transrormMovieInfo } from "mappers";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieInfo, getMovieByIMDB, useAppDispatch, useAppSelector } from "store";
import { LoadingText } from "./styles";

export const MovieInfoPage = () => {
  const { movieInfo, isLoading } = useAppSelector(getMovieByIMDB);
  const dispatch = useAppDispatch();
  const { imdb = "" } = useParams();
  useEffect(() => {
    dispatch(fetchMovieInfo(imdb));
  }, [dispatch, imdb]);
  const movie = transrormMovieInfo(movieInfo);
  return (
    <div>
      {isLoading && <LoadingText>Loading</LoadingText>}
      {movieInfo && <MovieInfo movie={movie} />}
    </div>
  );
};

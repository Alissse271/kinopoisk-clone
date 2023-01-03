import { transrormMovieInfo } from "mappers";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieInfo, getMovieByIMDB, useAppDispatch, useAppSelector } from "store";
import { IMovie } from "types";

export const MovieInfo = () => {
  const { movieInfo, isLoading } = useAppSelector(getMovieByIMDB);
  const dispatch = useAppDispatch();
  const { imdb } = useParams();
  useEffect(() => {
    if (imdb) {
      dispatch(fetchMovieInfo(imdb));
    }
  }, [dispatch, imdb]);
  const {
    title,
    year,
    released,
    runtime,
    genre,
    director,
    writer,
    actors,
    plot,
    boxOffice,
    country,
    imdbRating,
    poster,
    imdbID,
  } = transrormMovieInfo(movieInfo);
  return <div>MovieInfo {title} </div>;
};

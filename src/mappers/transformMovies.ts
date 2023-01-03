import { IMovieAPI } from "types";

export const transrormMovies = (movies: IMovieAPI[]) => {
  return movies.map((movie) => ({
    poster: movie.Poster,
    title: movie.Title,
    type: movie.Type,
    year: movie.Year,
    id: movie.imdbID,
  }));
};

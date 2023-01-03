import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { fetchMovieInfo } from "./movieInfo/movieInfoSlice";
import { fetchMovies } from "./movies/moviesSlice";
import { getAllMovies, getMovieByIMDB } from "./selectors/moviesSelector";
import { setTheme } from "./selectors/themeSelector";
import { store } from "./store";
import { toggleTheme } from "./theme/themeSlice";

export {
  useAppSelector,
  useAppDispatch,
  store,
  toggleTheme,
  setTheme,
  fetchMovies,
  fetchMovieInfo,
  getAllMovies,
  getMovieByIMDB,
};

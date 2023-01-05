import { signInUser, signUpUser } from "./auth/authSlice";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { fetchMovieInfo } from "./movieInfo/movieInfoSlice";
import { fetchMovies } from "./movies/moviesSlice";
import { fetchMoviesBySearch } from "./moviesSearch/moviesSearchSlice";
import { getUserInfo } from "./selectors/authSelector";
import { getAllMovies, getMovieByIMDB, getMoviesBySearch } from "./selectors/moviesSelector";
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
  fetchMoviesBySearch,
  getAllMovies,
  getMovieByIMDB,
  getMoviesBySearch,
  signUpUser,
  signInUser,
  getUserInfo,
};

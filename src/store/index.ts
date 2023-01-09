import { getLogOutUser, signInUser, signUpUser } from "./auth/authSlice";
import { addFavorite } from "./favorites/favoritesSlice";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { fetchMovieInfo } from "./movieInfo/movieInfoSlice";
import { fetchMovies, fetchMoviesBySearch } from "./movies/moviesSlice";
import { getUserInfo } from "./selectors/authSelector";
import { addToFavorite } from "./selectors/favoritesSelector";
import { getAllMovies, getMovieByIMDB } from "./selectors/moviesSelector";
import { getTheme } from "./selectors/themeSelector";
import { store } from "./store";
import { toggleTheme } from "./theme/themeSlice";

export {
  useAppSelector,
  useAppDispatch,
  store,
  toggleTheme,
  getTheme,
  fetchMovies,
  fetchMovieInfo,
  fetchMoviesBySearch,
  getAllMovies,
  getMovieByIMDB,
  signUpUser,
  signInUser,
  getUserInfo,
  getLogOutUser,
  addToFavorite,
  addFavorite,
};

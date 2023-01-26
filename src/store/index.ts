import {
  getLogOutUser,
  resetUserPassword,
  signInUser,
  signUpUser,
  updateUserEmail,
  updateUserName,
  updateUserPassword,
} from "./features/auth/authSlice";
import { addFavorite, removeFavorite } from "./features/favorites/favoritesSlice";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { fetchMovieInfo } from "./features/movieInfo/movieInfoSlice";
import { fetchMoreMovies, fetchMovies, fetchMoviesBySearch } from "./features/movies/moviesSlice";
import { getUserInfo } from "./selectors/authSelector";
import { getAllFavorites } from "./selectors/favoritesSelector";
import { getMovieInfo } from "./selectors/movieInfoSelector";
import { getAllMovies } from "./selectors/moviesSelector";
import { getTheme } from "./selectors/themeSelector";
import { getTrends } from "./selectors/trendsSelector";
import { store } from "./store";
import { toggleTheme } from "./features/theme/themeSlice";

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
  signUpUser,
  signInUser,
  resetUserPassword,
  updateUserPassword,
  updateUserEmail,
  getUserInfo,
  getLogOutUser,
  getAllFavorites,
  addFavorite,
  removeFavorite,
  getTrends,
  getMovieInfo,
  fetchMoreMovies,
  updateUserName,
};

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
import { createNextPage, fetchMovies, resetMovies } from "./features/movies/moviesSlice";
import { getUserInfo } from "./selectors/authSelector";
import { getAllFavorites } from "./selectors/favoritesSelector";
import { getMovieInfo } from "./selectors/movieInfoSelector";
import { getAllMovies } from "./selectors/moviesSelector";
import { getTheme } from "./selectors/themeSelector";
import { getTrends } from "./selectors/trendsSelector";
import { store } from "./store";
import { toggleTheme } from "./features/theme/themeSlice";
import { getMoviesBySearch } from "./selectors/searchSelector";
import {
  createNextSearchPage,
  deleteValues,
  fetchMoviesBySearch,
  resetSearchMovies,
  updateTitle,
  updateYear,
} from "./features/search/searchSlice";

export {
  useAppSelector,
  useAppDispatch,
  getAllMovies,
  getTheme,
  getUserInfo,
  getAllFavorites,
  getTrends,
  getMovieInfo,
  getMoviesBySearch,
  store,
  toggleTheme,
  fetchMovies,
  fetchMovieInfo,
  fetchMoviesBySearch,
  signUpUser,
  signInUser,
  resetUserPassword,
  updateUserPassword,
  updateUserEmail,
  getLogOutUser,
  addFavorite,
  removeFavorite,
  updateUserName,
  updateTitle,
  updateYear,
  resetSearchMovies,
  deleteValues,
  createNextSearchPage,
  createNextPage,
  resetMovies,
};

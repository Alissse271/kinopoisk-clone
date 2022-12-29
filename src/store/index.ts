import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { fetchMovies } from "./movies/moviesSlice";
import { getAllMovies } from "./selectors/moviesSelector";
import { setTheme } from "./selectors/themeSelector";
import { store } from "./store";
import { toggleTheme } from "./theme/themeSlice";

export { useAppSelector, useAppDispatch, store, toggleTheme, setTheme, fetchMovies, getAllMovies };

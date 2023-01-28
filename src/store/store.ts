import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import themeReducer from "./features/theme/themeSlice";
import moviesReducer from "./features/movies/moviesSlice";
import movieInfoReducer from "./features/movieInfo/movieInfoSlice";
import favoritesReducer from "./features/favorites/favoritesSlice";
import trendsReducer from "./features/trends/trendsSlice";
import searchReducer from "./features/search/searchSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: authReducer,
    movies: moviesReducer,
    movieInfo: movieInfoReducer,
    favorites: favoritesReducer,
    trends: trendsReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

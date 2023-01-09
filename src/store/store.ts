import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import themeReducer from "./theme/themeSlice";
import moviesReducer from "./movies/moviesSlice";
import movieInfoReducer from "./movieInfo/movieInfoSlice";
import favoritesReducer from "./favorites/favoritesSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: authReducer,
    movies: moviesReducer,
    movieInfo: movieInfoReducer,
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

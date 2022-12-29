import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import themeReducer from "./theme/themeSlice";
import moviesReducer from "./movies/moviesSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: authReducer,
    movies: moviesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

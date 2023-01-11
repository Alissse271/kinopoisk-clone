import { createSlice } from "@reduxjs/toolkit";
import { IMovie } from "types";

interface FavoritesState {
  favorites: IMovie[];
}

const initialState: FavoritesState = {
  favorites: JSON.parse(localStorage.getItem("favorites") || "[]"),
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite(state, { payload }) {
      state.favorites.push(payload);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    removeFavorite(state, { payload }) {
      state.favorites = state.favorites.filter((movie) => movie.id !== payload);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
});

export default favoritesSlice.reducer;

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

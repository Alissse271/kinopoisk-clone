import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { movieAPI } from "services";
import { IMovieAPI } from "types";

interface IMoviesState {
  movies: IMovieAPI[];
  isLoading: boolean;
  error: null | string;
}

export const fetchMoviesBySearch = createAsyncThunk<IMovieAPI[], string, { rejectValue: string }>(
  "movies/fetchMoviesBySearch",
  async (value, { rejectWithValue }) => {
    try {
      return movieAPI.getMoviesBySearch(value);
    } catch (error) {
      return rejectWithValue("Error");
    }
  },
);

const initialState: IMoviesState = {
  movies: [],
  isLoading: false,
  error: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchMoviesBySearch.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchMoviesBySearch.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.movies = payload;
    });
    builder.addCase(fetchMoviesBySearch.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default moviesSlice.reducer;

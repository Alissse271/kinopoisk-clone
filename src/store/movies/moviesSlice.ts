import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { transrormMovies } from "mappers";
import { movieAPI } from "services";
import { IMovie } from "types";

interface IMoviesState {
  movies: IMovie[];
  isLoading: boolean;
  error: null | string;
}

export const fetchMovies = createAsyncThunk<IMovie[], undefined, { rejectValue: string }>(
  "movies/fetchMovies",
  async (_, { rejectWithValue }) => {
    try {
      const response = await movieAPI.getRandomMovies();
      return transrormMovies(response.Search);
    } catch (error) {
      return rejectWithValue("Error");
    }
  },
);

export const fetchMoviesBySearch = createAsyncThunk<IMovie[], string, { rejectValue: string }>(
  "movies/fetchMoviesBySearch",
  async (value, { rejectWithValue }) => {
    try {
      const response = await movieAPI.getMoviesBySearch(value);
      return transrormMovies(response.Search);
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
    builder.addCase(fetchMovies.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchMovies.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.movies = payload;
    });
    builder.addCase(fetchMovies.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
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

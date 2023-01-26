import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { transrormMovies } from "mappers";
import { movieAPI } from "services";
import { FilterValue, IMovie } from "types";

interface IMoviesState {
  movies: IMovie[];
  page: number;
  isLoading: boolean;
  isFoundMovies: boolean;
  isLoadingMoreMovies: boolean;
  error: null | string;
}
const initialState: IMoviesState = {
  movies: [],
  page: 1,
  isLoading: false,
  isFoundMovies: true,
  isLoadingMoreMovies: false,
  error: null,
};

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

export const fetchMoviesBySearch = createAsyncThunk<IMovie[], FilterValue, { rejectValue: string }>(
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

export const fetchMoreMovies = createAsyncThunk<IMovie[], string, { rejectValue: string }>(
  "movies/fetchMoreMovies",
  async (page, { rejectWithValue }) => {
    try {
      const response = await movieAPI.getMoreMovies(page);
      return transrormMovies(response.Search);
    } catch (error) {
      return rejectWithValue("Error");
    }
  },
);

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchMovies.pending, (state) => {
      state.isLoadingMoreMovies = true;
      state.error = null;
    });
    builder.addCase(fetchMovies.fulfilled, (state, { payload }) => {
      state.isLoadingMoreMovies = false;
      state.movies = payload;
    });
    builder.addCase(fetchMovies.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoadingMoreMovies = false;
        state.error = payload;
      }
    });
    builder.addCase(fetchMoviesBySearch.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchMoviesBySearch.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isFoundMovies = true;
      state.movies = payload;
    });
    builder.addCase(fetchMoviesBySearch.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.isFoundMovies = false;
        state.error = payload;
      }
    });

    builder.addCase(fetchMoreMovies.pending, (state) => {
      state.isLoadingMoreMovies = true;
      state.error = null;
    });
    builder.addCase(fetchMoreMovies.fulfilled, (state, { payload }) => {
      state.isLoadingMoreMovies = false;
      state.movies = state.movies.concat(payload);
    });
    builder.addCase(fetchMoreMovies.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoadingMoreMovies = false;
        state.error = payload;
      }
    });
  },
});

export default moviesSlice.reducer;

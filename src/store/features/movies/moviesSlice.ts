import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { transrormMovies } from "mappers";
import { movieAPI } from "services";
import { IMovie } from "types";

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

export const fetchMovies = createAsyncThunk<IMovie[], { page: number }, { rejectValue: string }>(
  "movies/fetchMovies",
  async ({ page }, { rejectWithValue }) => {
    try {
      const response = await movieAPI.getRandomMovies(page);
      return transrormMovies(response.Search);
    } catch (error) {
      return rejectWithValue("Error");
    }
  },
);

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    createNextPage(state, { payload }: PayloadAction<boolean>) {
      payload ? (state.page = state.page + 1) : (state.page = 1);
    },
    resetMovies(state) {
      state.movies = [];
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchMovies.pending, (state) => {
      state.isLoadingMoreMovies = true;
      state.error = null;
    });
    builder.addCase(fetchMovies.fulfilled, (state, { payload }) => {
      state.isLoadingMoreMovies = false;
      state.movies = state.movies.concat(payload);
    });
    builder.addCase(fetchMovies.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoadingMoreMovies = false;
        state.error = payload;
      }
    });
  },
});

export default moviesSlice.reducer;
export const { createNextPage, resetMovies } = moviesSlice.actions;

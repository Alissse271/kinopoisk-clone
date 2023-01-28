import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { transrormMovies } from "mappers";
import { movieAPI } from "services";
import { FilterValue, IMovie } from "types";

interface IMoviesState {
  movies: IMovie[];
  isLoading: boolean;
  isFoundMovies: boolean;
  isLoadingMoreMovies: boolean;
  error: null | string;
  searchValue: FilterValue;
}
const initialState: IMoviesState = {
  movies: [],
  isLoading: false,
  isFoundMovies: true,
  isLoadingMoreMovies: false,
  error: null,
  searchValue: {
    s: "",
    y: "",
    page: 1,
  },
};

export const fetchMoviesBySearch = createAsyncThunk<IMovie[], FilterValue, { rejectValue: string }>(
  "movies/fetchMoviesBySearch",
  async (searchValue, { rejectWithValue }) => {
    try {
      const response = await movieAPI.getMoviesBySearch(searchValue);
      return transrormMovies(response.Search);
    } catch (error) {
      return rejectWithValue("Error");
    }
  },
);

const searchSlice = createSlice({
  name: "moviesSearch",
  initialState,
  reducers: {
    createNextSearchPage(state, { payload }: PayloadAction<boolean>) {
      payload
        ? (state.searchValue.page = state.searchValue.page + 1)
        : (state.searchValue.page = 1);
    },
    updateTitle(state, { payload }: PayloadAction<string>) {
      state.searchValue.s = payload;
    },
    updateYear(state, { payload }: PayloadAction<string>) {
      state.searchValue.y = payload;
    },
    deleteValues(state) {
      state.searchValue = {
        s: "",
        y: "",
        page: 1,
      };
    },
    resetSearchMovies(state) {
      state.movies = [];
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchMoviesBySearch.pending, (state) => {
      state.isLoading = true;
      state.isLoadingMoreMovies = true;
      state.error = null;
    });
    builder.addCase(fetchMoviesBySearch.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.movies = state.movies.concat(payload);
      state.isLoadingMoreMovies = false;
    });
    builder.addCase(fetchMoviesBySearch.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.isLoadingMoreMovies = false;
        state.error = payload;
      }
    });
  },
});
export const { createNextSearchPage, updateTitle, updateYear, deleteValues, resetSearchMovies } =
  searchSlice.actions;
export default searchSlice.reducer;

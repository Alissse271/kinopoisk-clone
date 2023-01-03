import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { movieAPI } from "services";
import { IMovieInfo, IMovieInfoAPI } from "types";

interface IMovieInfoState {
  movieInfo: IMovieInfoAPI;
  isLoading: boolean;
  error: null | string;
}

export const fetchMovieInfo = createAsyncThunk<IMovieInfoAPI, string, { rejectValue: string }>(
  "movie/fetchMovieInfo",
  async (imdb: string, { rejectWithValue }) => {
    try {
      return movieAPI.getMovieByIMDB(imdb);
    } catch (error) {
      return rejectWithValue("Error");
    }
  },
);

const initialState: IMovieInfoState = {
  movieInfo: {} as IMovieInfoAPI,
  isLoading: false,
  error: null,
};

const movieInfoSlice = createSlice({
  name: "movieInfo",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchMovieInfo.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchMovieInfo.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.movieInfo = payload;
    });
    builder.addCase(fetchMovieInfo.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default movieInfoSlice.reducer;

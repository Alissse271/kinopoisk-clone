import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { transrormMovieInfo } from "mappers";
import { movieAPI } from "services";
import { IMovieInfo } from "types";

interface IMovieInfoState {
  movieInfo: IMovieInfo;
  isLoading: boolean;
  error: null | string;
}

export const fetchMovieInfo = createAsyncThunk<IMovieInfo, string, { rejectValue: string }>(
  "movie/fetchMovieInfo",
  async (imdb: string, { rejectWithValue }) => {
    try {
      const movieInfo = await movieAPI.getMovieByIMDB(imdb);
      return transrormMovieInfo(movieInfo);
    } catch (error) {
      return rejectWithValue("Error");
    }
  },
);

const initialState: IMovieInfoState = {
  movieInfo: {} as IMovieInfo,
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

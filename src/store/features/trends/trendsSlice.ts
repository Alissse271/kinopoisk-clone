import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { transrormMovies } from "mappers";
import { movieAPI } from "services";
import { IMovie } from "types";

interface ITrendsState {
  trends: IMovie[];
  isLoading: boolean;
  error: null | string;
}

const initialState: ITrendsState = {
  trends: [],
  isLoading: false,
  error: null,
};

export const fetchTrends = createAsyncThunk<IMovie[], undefined, { rejectValue: string }>(
  "movies/fetchTrends",
  async (_, { rejectWithValue }) => {
    try {
      const response = await movieAPI.getTrends();
      return transrormMovies(response.Search);
    } catch (error) {
      return rejectWithValue("Error");
    }
  },
);

const trendsSlice = createSlice({
  name: "trends",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchTrends.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchTrends.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.trends = payload;
    });
    builder.addCase(fetchTrends.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default trendsSlice.reducer;

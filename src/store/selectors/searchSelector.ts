import { RootState } from "store/store";

export const getMoviesBySearch = (state: RootState) => state.search;

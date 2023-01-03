import { RootState } from "store/store";

export const getAllMovies = (state: RootState) => state.movies;
export const getMovieByIMDB = (state: RootState) => state.movieInfo;

import { MovieCard } from "components";
import { memo } from "react";
import { IMovie } from "types";
import { StyledMovieList } from "./styles";

interface IProps {
  movies: IMovie[];
  isFavorites?: boolean;
  isTrends?: boolean;
}
export const MovieList = memo(({ movies, isFavorites, isTrends }: IProps) => {
  return (
    <StyledMovieList>
      {movies.map((movie) => {
        return <MovieCard trends={isTrends} favorites={isFavorites} key={movie.id} movie={movie} />;
      })}
    </StyledMovieList>
  );
});

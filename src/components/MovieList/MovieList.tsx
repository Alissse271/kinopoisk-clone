import { MovieCard } from "components";
import { IMovie } from "types";
import { StyledMovieList } from "./styles";

interface IProps {
  movies: IMovie[];
  favorites?: boolean;
  trends?: boolean;
}
export const MovieList = ({ movies, favorites, trends }: IProps) => {
  return (
    <StyledMovieList>
      {movies.map((movie) => {
        return <MovieCard trends={trends} favorites={favorites} key={movie.id} movie={movie} />;
      })}
    </StyledMovieList>
  );
};

import { MovieCard } from "components";
import { IMovie } from "types";
import { StyledMovieList } from "./styles";

interface IProps {
  movies: IMovie[];
}
export const MovieList = ({ movies }: IProps) => {
  console.log(movies);
  return (
    <StyledMovieList>
      {movies.map((movie) => {
        return <MovieCard key={movie.id} movie={movie} />;
      })}
    </StyledMovieList>
  );
};

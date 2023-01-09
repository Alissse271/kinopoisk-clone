import { imageNotFound } from "assets";
import { generatePath, Link } from "react-router-dom";
import { ROUTE } from "router";
import { useAppDispatch } from "store";
import { IMovie } from "types";
import { Name, Card, Image, ImageContainer } from "./styles";

interface IProps {
  movie: IMovie;
}

export const MovieCard = ({ movie }: IProps) => {
  return (
    <Card>
      <Link
        style={{ textDecoration: "none" }}
        to={generatePath(`${ROUTE.MOVIE_INFO}`, { imdb: movie.id })}
      >
        <ImageContainer>
          {movie.poster === "N/A" ? (
            <Image src={imageNotFound} alt="Movie" />
          ) : (
            <Image src={movie.poster} alt="Movie" />
          )}
        </ImageContainer>
        <Name>
          {movie.title}: {movie.year}
        </Name>
      </Link>
    </Card>
  );
};

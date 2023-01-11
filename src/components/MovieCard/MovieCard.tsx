import { imageNotFound } from "assets";
import { generatePath, Link } from "react-router-dom";
import { ROUTE } from "router";
import { IMovie } from "types";
import { Name, Card, Image, ImageContainer, FavoriteLabel, TrendsLabel } from "./styles";
import { FavoritesMark, TrendsMark } from "assets";
import { Color } from "ui";

interface IProps {
  movie: IMovie;
  favorites?: boolean;
  trends?: boolean;
}

export const MovieCard = ({ movie, favorites, trends }: IProps) => {
  return (
    <Card>
      <Link
        style={{ textDecoration: "none" }}
        to={generatePath(`${ROUTE.MOVIE_INFO}`, { imdb: movie.id })}
      >
        {favorites && (
          <FavoriteLabel>
            <FavoritesMark fill={Color.PRIMARY} />
          </FavoriteLabel>
        )}
        {trends && (
          <TrendsLabel>
            <TrendsMark />
          </TrendsLabel>
        )}
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

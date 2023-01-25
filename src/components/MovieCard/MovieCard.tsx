import { imageNotFound } from "assets";
import { generatePath, Link } from "react-router-dom";
import { ROUTE } from "router";
import { IMovie } from "types";
import { Name, Card, Image, ImageContainer, FavoriteLabel, TrendsLabel } from "./styles";
import { FavoritesMark, TrendsMark } from "assets";
import { Color } from "ui";
import { memo } from "react";

interface IProps {
  movie: IMovie;
  favorites?: boolean;
  trends?: boolean;
}

export const MovieCard = memo(
  ({ movie: { id, poster, title, year }, favorites, trends }: IProps) => {
    return (
      <Card whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link to={generatePath(ROUTE.HOME + ROUTE.MOVIE_INFO, { imdb: id })}>
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
            {poster === "N/A" ? (
              <Image src={imageNotFound} alt="Movie" />
            ) : (
              <Image src={poster} alt={title} />
            )}
          </ImageContainer>
          <Name>
            {title}: {year}
          </Name>
        </Link>
      </Card>
    );
  },
);

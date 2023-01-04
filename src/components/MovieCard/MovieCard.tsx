import { imageNotFound } from "assets";
import { Badge } from "components";
import { useWindowSize } from "hooks";
import { transrormMovieInfo } from "mappers";
import { useEffect } from "react";
import { generatePath, Link, useParams } from "react-router-dom";
import { ROUTE } from "router";
import { fetchMovieInfo, getMovieByIMDB, useAppDispatch, useAppSelector } from "store";
import { IMovie } from "types";
import { StyledBadge, Name, Card, List, ListItem, Image, ImageContainer } from "./styles";

interface IProps {
  movie: IMovie;
}

export const MovieCard = ({ movie }: IProps) => {
  const { movieInfo } = useAppSelector(getMovieByIMDB);
  const dispatch = useAppDispatch();
  const { imdb } = useParams();
  useEffect(() => {
    if (imdb) {
      dispatch(fetchMovieInfo(imdb));
    }
  }, [dispatch, imdb]);
  const { genre, imdbRating } = transrormMovieInfo(movieInfo);

  const { width = 0 } = useWindowSize();
  const $isMobile = width >= 768 && width <= 1280;

  return (
    <Card>
      <StyledBadge color={"green"} label={imdbRating} />
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
        <List $isMobile={$isMobile}>
          {/* {genre?.split(",").map((genre) => {
            return (
              <ListItem key={genre} $isMobile={$isMobile}>
                {genre}
              </ListItem>
            );
          })} */}
          <ListItem $isMobile={$isMobile}>Adventure</ListItem>
          <ListItem $isMobile={$isMobile}>Action</ListItem>
          <ListItem $isMobile={$isMobile}>Fantasy</ListItem>
        </List>
      </Link>
    </Card>
  );
};

import { useWindowSize } from "hooks";
import { generatePath, Link } from "react-router-dom";
import { ROUTE } from "router";
import { IMovie } from "types";
import { Name, Card, List, ListItem, Image, ImageContainer } from "./styles";

interface IProps {
  movie: IMovie;
}

export const MovieCard = ({ movie }: IProps) => {
  const { width = 0 } = useWindowSize();
  const $isMobile = width >= 768 && width <= 1280;

  return (
    <Card>
      <Link
        style={{ textDecoration: "none" }}
        to={generatePath(`${ROUTE.MOVIE_INFO}`, { imdb: movie.id })}
      >
        <ImageContainer>
          <Image src={movie.poster} alt="Movie" />
        </ImageContainer>
        <Name>
          {movie.title}: {movie.year}
        </Name>
        <List $isMobile={$isMobile}>
          <ListItem $isMobile={$isMobile}>Adventure</ListItem>
          <ListItem $isMobile={$isMobile}>Action</ListItem>
          <ListItem $isMobile={$isMobile}>Fantasy</ListItem>
        </List>
      </Link>
    </Card>
  );
};

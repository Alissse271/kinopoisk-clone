import { useWindowSize } from "hooks";
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
      <ImageContainer>
        <Image src={movie.Poster} alt="Movie" />
      </ImageContainer>
      <Name>
        {movie.Title}: {movie.Year}
      </Name>
      <List $isMobile={$isMobile}>
        <ListItem $isMobile={$isMobile}>Adventure</ListItem>
        <ListItem $isMobile={$isMobile}>Action</ListItem>
        <ListItem $isMobile={$isMobile}>Fantasy</ListItem>
      </List>
    </Card>
  );
};

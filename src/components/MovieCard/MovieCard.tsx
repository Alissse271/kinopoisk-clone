import { useWindowSize } from "hooks";
import card from "../../assets/images/test-card.jpg";
import { Name, Card, List, ListItem, Image } from "./styles";

export const MovieCard = () => {
  const { width = 0 } = useWindowSize();
  const $isMobile = width >= 768 && width <= 1280;

  return (
    <Card>
      <Image src={card} alt="Movie" />
      <Name>Wonder Woman: 1984</Name>
      <List $isMobile={$isMobile}>
        <ListItem $isMobile={$isMobile}>Adventure</ListItem>
        <ListItem $isMobile={$isMobile}>Action</ListItem>
        <ListItem $isMobile={$isMobile}>Fantasy</ListItem>
      </List>
    </Card>
  );
};

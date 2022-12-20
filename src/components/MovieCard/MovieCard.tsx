import card from "../../assets/images/test-card.jpg";
import { Name, Card, List, ListItem, Image } from "./styles";

export const MovieCard = () => {
  return (
    <Card>
      <Image src={card} alt="Movie" />
      <Name>Wonder Woman: 1984</Name>
      <List>
        <ListItem>Adventure</ListItem>
        <ListItem>Action</ListItem>
        <ListItem>Fantasy</ListItem>
      </List>
    </Card>
  );
};

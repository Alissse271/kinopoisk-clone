import { emptyFavorites } from "assets";
import { EmptyFavoritesContainer, EmptyText } from "./styles";

export const FavoritesPage = () => {
  return (
    <EmptyFavoritesContainer>
      <img src={emptyFavorites} alt="Empty list of favorites"></img>
      <EmptyText>No favorite movies</EmptyText>
    </EmptyFavoritesContainer>
  );
};

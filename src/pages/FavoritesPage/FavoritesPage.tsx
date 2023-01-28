import { emptyFavorites } from "assets";
import { MovieList } from "components";
import { useWindowSize } from "hooks";
import { Navigate } from "react-router-dom";
import { ROUTE } from "router";
import { getAllFavorites, getUserInfo, useAppSelector } from "store";
import { Container, EmptyFavoritesContainer, EmptyText, StyledTitle, Image } from "./styles";

export const FavoritesPage = () => {
  const { favorites } = useAppSelector(getAllFavorites);
  const { isAuth } = useAppSelector(getUserInfo);
  const { width = 0 } = useWindowSize();

  return isAuth ? (
    <Container>
      {favorites.length === 0 && (
        <>
          {width < 1440 && <StyledTitle label="Favorites" />}
          <EmptyFavoritesContainer>
            <Image src={emptyFavorites} alt="Empty list of favorites"></Image>
            <EmptyText>No favorite movies</EmptyText>
          </EmptyFavoritesContainer>
        </>
      )}
      {favorites && favorites.length > 0 && (
        <>
          <MovieList isFavorites movies={favorites} />
        </>
      )}
    </Container>
  ) : (
    <Navigate to={ROUTE.HOME + ROUTE.SIGN_IN} />
  );
};

import { emptyFavorites } from "assets";
import { MovieList } from "components";
import { useWindowSize } from "hooks";
import { Navigate } from "react-router-dom";
import { ROUTE } from "router";
import { getAllFavorites, getUserInfo, useAppSelector } from "store";
import { EmptyFavoritesContainer, EmptyText, StyledTitle } from "./styles";

export const FavoritesPage = () => {
  const { favorites } = useAppSelector(getAllFavorites);
  const { isAuth } = useAppSelector(getUserInfo);
  const { width = 0 } = useWindowSize();
  return isAuth ? (
    <>
      {favorites.length === 0 && (
        <>
          {width < 1440 && <StyledTitle label="Favorites" />}
          <EmptyFavoritesContainer>
            <img src={emptyFavorites} alt="Empty list of favorites"></img>
            <EmptyText>No favorite movies</EmptyText>
          </EmptyFavoritesContainer>
        </>
      )}
      {favorites && favorites.length > 0 && (
        <>
          <MovieList isFavorites movies={favorites} />
        </>
      )}
    </>
  ) : (
    <Navigate to={`${ROUTE.HOME}` + `${ROUTE.SIGN_IN}`} />
  );
};

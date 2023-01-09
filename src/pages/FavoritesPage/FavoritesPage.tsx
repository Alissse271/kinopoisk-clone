import { emptyFavorites } from "assets";
import { Navigate } from "react-router-dom";
import { ROUTE } from "router";
import { getUserInfo, useAppSelector } from "store";
import { EmptyFavoritesContainer, EmptyText } from "./styles";

export const FavoritesPage = () => {
  const { isAuth } = useAppSelector(getUserInfo);
  return isAuth ? (
    <EmptyFavoritesContainer>
      <img src={emptyFavorites} alt="Empty list of favorites"></img>
      <EmptyText>No favorite movies</EmptyText>
    </EmptyFavoritesContainer>
  ) : (
    <Navigate to={`${ROUTE.HOME}` + `${ROUTE.SIGN_IN}`} />
  );
};

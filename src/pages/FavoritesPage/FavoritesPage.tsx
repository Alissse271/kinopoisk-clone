import { emptyFavorites } from "assets";
import { MovieList } from "components";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { ROUTE } from "router";
import { addToFavorite, getUserInfo, useAppSelector } from "store";
import { EmptyFavoritesContainer, EmptyText } from "./styles";

export const FavoritesPage = () => {
  const { favorites } = useAppSelector(addToFavorite);
  const { isAuth } = useAppSelector(getUserInfo);
  const favoritesMovies = JSON.parse(localStorage.getItem("favorites")!);

  return isAuth ? (
    <>
      {favoritesMovies === null && (
        <EmptyFavoritesContainer>
          <img src={emptyFavorites} alt="Empty list of favorites"></img>
          <EmptyText>No favorite movies</EmptyText>
        </EmptyFavoritesContainer>
      )}
      {favoritesMovies && favoritesMovies.length > 0 && <MovieList movies={favoritesMovies} />}
    </>
  ) : (
    <Navigate to={`${ROUTE.HOME}` + `${ROUTE.SIGN_IN}`} />
  );
};

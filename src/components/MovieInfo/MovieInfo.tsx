import { FavoritesMark, imageNotFound, ShareMark } from "assets";
import { Badge } from "components";
import { useWindowSize } from "hooks";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import {
  addFavorite,
  getAllFavorites,
  getUserInfo,
  removeFavorite,
  useAppDispatch,
  useAppSelector,
} from "store";

import { IMovieInfo } from "types";
import { Color } from "ui";
import {
  Container,
  Genres,
  GenresList,
  Title,
  Badges,
  ImageWrap,
  MovieImage,
  Plot,
  MovieDetails,
  Name,
  Description,
  MovieDetailsList,
  ButtonsContainer,
  SaveToFavoritesButton,
  RemoveFromFavoritesButton,
  ShareButton,
  Row,
} from "./styles";

interface IProps {
  movie: IMovieInfo;
}

export const MovieInfo = ({
  movie: {
    title,
    year,
    released,
    runtime,
    genre,
    director,
    writer,
    actors,
    plot,
    boxOffice,
    country,
    imdbRating,
    poster,
    imdbID,
  },
}: IProps) => {
  const { favorites } = useAppSelector(getAllFavorites);
  const { isAuth } = useAppSelector(getUserInfo);
  const { width = 0 } = useWindowSize();
  const dispach = useAppDispatch();
  const navigate = useNavigate();
  const favorite = { title, year, poster, id: imdbID, type: "movie" };

  const isFavorite = (): boolean => favorites.some((favorite) => favorite.id === imdbID);

  const handleAddToFavorites = () => {
    isAuth ? dispach(addFavorite(favorite)) : navigate(`${ROUTE.HOME}` + `${ROUTE.SIGN_IN}`);
  };

  const handleRemoveFromFavorites = () => {
    dispach(removeFavorite(favorite.id));
  };

  return (
    <Container>
      <GenresList>
        {genre?.split(",").map((genre) => {
          return <Genres key={genre}>{genre}</Genres>;
        })}
      </GenresList>
      <Title>
        {title}: {year}
      </Title>
      <Badges>
        <Badge color={"#000"} label={imdbRating} />
        <Badge icon color={Color.GRAPHITE} label={imdbRating} />
        <Badge color={Color.GRAPHITE} label={runtime} />
      </Badges>
      <ImageWrap>
        {poster === "N/A" ? (
          <MovieImage src={imageNotFound} alt="Movie poster"></MovieImage>
        ) : (
          <MovieImage src={poster} alt="Movie poster"></MovieImage>
        )}
      </ImageWrap>
      <ButtonsContainer>
        {isFavorite() ? (
          <RemoveFromFavoritesButton onClick={handleRemoveFromFavorites}>
            <FavoritesMark />
          </RemoveFromFavoritesButton>
        ) : (
          <SaveToFavoritesButton onClick={handleAddToFavorites}>
            <FavoritesMark />
          </SaveToFavoritesButton>
        )}
        <ShareButton>
          <ShareMark />
        </ShareButton>
      </ButtonsContainer>
      <Plot>{plot}</Plot>
      <MovieDetails>
        <MovieDetailsList>
          <Row>
            <Name>Year</Name>
            <Description>{year}</Description>
          </Row>
          <Row>
            <Name>Released</Name>
            <Description>{released}</Description>
          </Row>
          <Row>
            <Name>BoxOffice</Name>
            <Description>{boxOffice}</Description>
          </Row>
          <Row>
            <Name>Country</Name>
            <Description>{country}</Description>
          </Row>
          <Row>
            <Name>Actors</Name>
            <Description>{actors}</Description>
          </Row>
          <Row>
            <Name>Director</Name>
            <Description>{director}</Description>
          </Row>
          <Row>
            <Name>Writers</Name>
            <Description>{writer}</Description>
          </Row>
        </MovieDetailsList>
      </MovieDetails>
    </Container>
  );
};

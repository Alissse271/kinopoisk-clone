import { FavoritesMark, imageNotFound, ShareMark } from "assets";
import { Badge, Loader, Slider } from "components";
import { memo, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import {
  addFavorite,
  getAllFavorites,
  getMovieInfo,
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
  ImageContainer,
  ErrorMessage,
} from "./styles";

interface IProps {
  movie: IMovieInfo;
}

export const MovieInfo = memo(({ movie }: IProps) => {
  const {
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
  } = movie;
  const { favorites } = useAppSelector(getAllFavorites);
  const { isLoading, error } = useAppSelector(getMovieInfo);
  const { isAuth } = useAppSelector(getUserInfo);
  const dispach = useAppDispatch();
  const navigate = useNavigate();

  const favorite = { title, year, poster, id: imdbID, type: "movie" };

  const isFavorite = (): boolean => favorites.some((favorite) => favorite.id === imdbID);

  const handleAddToFavorites = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    isAuth ? dispach(addFavorite(favorite)) : navigate(ROUTE.HOME + ROUTE.SIGN_IN);
  };

  const handleRemoveFromFavorites = () => {
    dispach(removeFavorite(favorite.id));
  };

  return isLoading ? (
    <Loader loading={isLoading} />
  ) : error ? (
    <ErrorMessage>{error}</ErrorMessage>
  ) : (
    <Container>
      <GenresList>
        {genre &&
          genre.split(",").map((genre) => {
            return <Genres key={genre}>{genre}</Genres>;
          })}
      </GenresList>
      <Title>
        {title}: {year}
      </Title>
      <Badges>
        <Badge color={Color.GREEN} label={imdbRating} />
        <Badge icon color={Color.GRAPHITE} label={imdbRating} />
        <Badge color={Color.GRAPHITE} label={runtime} />
      </Badges>
      <ImageContainer>
        <ImageWrap>
          {poster === "N/A" ? (
            <MovieImage src={imageNotFound} alt="Movie poster"></MovieImage>
          ) : (
            <MovieImage src={poster} alt={title}></MovieImage>
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
      </ImageContainer>
      <Plot>{plot}</Plot>
      <MovieDetails>
        <MovieDetailsList>
          {year !== "N/A" && (
            <Row>
              <Name>Year</Name>
              <Description>{year}</Description>
            </Row>
          )}
          {released !== "N/A" && (
            <Row>
              <Name>Released</Name>
              <Description>{released}</Description>
            </Row>
          )}
          {boxOffice !== "N/A" && (
            <Row>
              <Name>BoxOffice</Name>
              <Description>{boxOffice}</Description>
            </Row>
          )}
          {country !== "N/A" && (
            <Row>
              <Name>Country</Name>
              <Description>{country}</Description>
            </Row>
          )}
          {actors !== "N/A" && (
            <Row>
              <Name>Actors</Name>
              <Description>{actors}</Description>
            </Row>
          )}
          {director !== "N/A" && (
            <Row>
              <Name>Director</Name>
              <Description>{director}</Description>
            </Row>
          )}
          {writer !== "N/A" && (
            <Row>
              <Name>Writers</Name>
              <Description>{writer}</Description>
            </Row>
          )}
        </MovieDetailsList>
      </MovieDetails>
      <Slider />
    </Container>
  );
});

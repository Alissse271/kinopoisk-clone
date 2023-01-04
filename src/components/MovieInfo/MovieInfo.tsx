import { imageNotFound } from "assets";
import { Badge } from "components";
import { useWindowSize } from "hooks";
import { transrormMovieInfo } from "mappers";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieInfo, getMovieByIMDB, useAppDispatch, useAppSelector } from "store";
import { Color } from "ui";
import {
  LoadingText,
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
} from "./styles";

export const MovieInfo = () => {
  const { movieInfo, isLoading } = useAppSelector(getMovieByIMDB);
  const dispatch = useAppDispatch();
  const { imdb } = useParams();
  useEffect(() => {
    if (imdb) {
      dispatch(fetchMovieInfo(imdb));
    }
  }, [dispatch, imdb]);
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
  } = transrormMovieInfo(movieInfo);
  const { width = 0 } = useWindowSize();
  return (
    <>
      {isLoading && <LoadingText>Loading</LoadingText>}
      {movieInfo && (
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
          {/* BUTTONS */}
          <Plot>{plot}</Plot>
          <MovieDetails>
            <MovieDetailsList>
              <tr>
                <Name>Year</Name>
                <Description>{year}</Description>
              </tr>
              <tr>
                <Name>Released</Name>
                <Description>{released}</Description>
              </tr>
              <tr>
                <Name>BoxOffice</Name>
                <Description>{boxOffice}</Description>
              </tr>
              <tr>
                <Name>Country</Name>
                <Description>{country}</Description>
              </tr>
              <tr>
                <Name>Actors</Name>
                <Description>{actors}</Description>
              </tr>
              <tr>
                <Name>Director</Name>
                <Description>{director}</Description>
              </tr>
              <tr>
                <Name>Writers</Name>
                <Description>{writer}</Description>
              </tr>
            </MovieDetailsList>
          </MovieDetails>
        </Container>
      )}
    </>
  );
};

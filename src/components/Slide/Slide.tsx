import { imageNotFound } from "assets";
import { generatePath } from "react-router-dom";
import { ROUTE } from "router";
import { IMovie } from "types";
import { Poster, StyledSlide, Title } from "./styles";

interface IProps {
  movie: IMovie;
}

export const Slide = ({ movie: { poster, id, title } }: IProps) => {
  return (
    <StyledSlide to={generatePath(`${ROUTE.HOME}` + `${ROUTE.MOVIE_INFO}`, { imdb: id })}>
      {poster === "N/A" ? (
        <Poster src={imageNotFound} alt="Movie" />
      ) : (
        <Poster src={poster} alt="Movie" />
      )}
      <Title>{title}</Title>
    </StyledSlide>
  );
};
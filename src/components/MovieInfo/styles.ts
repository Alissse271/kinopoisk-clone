import styled from "styled-components";
import { Color, Typography } from "ui";

const LoadingText = styled.span`
  ${Typography.H2};
`;
const Container = styled.div`
  display: grid;
  justify-items: flex-start;
`;
const GenresList = styled.ul`
  display: inline-grid;
  grid-template-columns: repeat(3, auto);
`;

const Genres = styled.li`
  position: relative;

  margin-right: 1.5rem;

  ${Typography.S5};
  color: ${Color.LIGHT};
  list-style: none;

  &&:not(:nth-child(3n + 1)):before {
    content: "";
    position: absolute;
    left: -1rem;
    top: calc(50% - 0.125rem);
    width: 0.5rem;
    height: 0.5rem;
    background-color: ${Color.LIGHT};
    border-radius: 50%;
  }
`;

const Title = styled.h1`
  ${Typography.H1};
  padding-bottom: 20px;
`;

const Badges = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(3, auto);
  grid-column-gap: 20px;
  padding-bottom: 32px;
`;
const ImageWrap = styled.div`
  max-width: 272px;

  margin-bottom: 24px;
`;
const MovieImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 20px;
`;
const ButtonsContainer = styled.div`
  display: flex;
  max-width: 272px;
  width: 100%;
  margin-bottom: 32px;
  background-color: inherit;
  border-radius: 10px;
`;
const SaveToFavoritesButton = styled.button`
  width: 100%;
  margin-right: 1px;
  padding: 16px 0;
  background-color: ${Color.GRAPHITE};
  border-radius: 10px 0 0 10px;
  cursor: pointer;
  svg {
    fill: ${Color.LIGHT};
    &:hover {
      fill: ${Color.WHITE};
    }
  }
  &:disabled {
    background-color: ${Color.SECONDARY};
    svg {
      &:hover {
        fill: ${Color.LIGHT};
      }
    }
  }
`;
const ShareButton = styled.button`
  width: 100%;
  padding: 16px 0;
  background-color: ${Color.GRAPHITE};
  border-radius: 0 10px 10px 0;
  cursor: pointer;
  svg:hover {
    fill: ${Color.WHITE};
  }
  &:disabled {
    background-color: ${Color.SECONDARY};
    svg {
      &:hover {
        fill: ${Color.LIGHT};
      }
    }
  }
`;
const Plot = styled.p`
  ${Typography.B1};
  margin-bottom: 32px;
`;
const MovieDetails = styled.table``;
const MovieDetailsList = styled.tbody`
  display: grid;
  grid-row-gap: 16px;
`;
const Name = styled.td`
  width: 160px;
  ${Typography.S3};
  color: ${Color.LIGHT};
`;
const Description = styled.td`
  ${Typography.B1};
`;

export {
  LoadingText,
  Container,
  GenresList,
  Genres,
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
  ShareButton,
};

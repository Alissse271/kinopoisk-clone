import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color, Media, Typography } from "ui";

const StyledSlide = styled(Link)`
  display: flex;
  flex-direction: column;

  text-decoration: none;
  cursor: pointer;
`;

const Poster = styled.img`
  width: 100%;
  height: 365px;

  margin-bottom: 14px;

  object-fit: cover;
  border-radius: 20px;

  ${Media.SM} {
    height: 279px;
  }
  ${Media.LG} {
    height: 357px;
  }
`;

const Title = styled.h2`
  ${Typography.S2};
  &:hover {
    color: ${Color.PRIMARY};
  }
`;

export { StyledSlide, Poster, Title };

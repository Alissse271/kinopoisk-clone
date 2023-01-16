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
  height: 357px;
  object-fit: cover;
  border-radius: 20px;
  margin-bottom: 14px;
  ${Media.LG} {
    height: 276px;
  }
  ${Media.SM} {
    height: 266px;
  }
`;

const Title = styled.h2`
  ${Typography.S2};
  &:hover {
    color: ${Color.PRIMARY};
  }
`;

export { StyledSlide, Poster, Title };

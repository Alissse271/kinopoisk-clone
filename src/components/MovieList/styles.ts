import styled from "styled-components";
import { Media } from "ui";

const StyledMovieList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 32px;
  justify-content: center;
  justify-items: center;
  align-content: flex-start;

  ${Media.MD} {
    grid-template-columns: repeat(2, minmax(208px, 300px));
    grid-column-gap: 32px;
  }
  ${Media.LG} {
    grid-template-columns: repeat(3, minmax(208px, 300px));
    grid-row-gap: 40px;
  }
  ${Media.XL} {
    grid-template-columns: repeat(4, minmax(208px, 300px));
  }
  ${Media.XXL} {
    grid-template-columns: repeat(3, minmax(208px, 300px));
  }
  ${Media.XXXL} {
    grid-template-columns: repeat(3, minmax(208px, 300px));
  }
  ${Media.XXXXL} {
    grid-template-columns: repeat(5, minmax(208px, 300px));
  }
`;

export { StyledMovieList };

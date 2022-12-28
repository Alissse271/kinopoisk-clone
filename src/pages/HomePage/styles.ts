import styled from "styled-components";
import { Media } from "ui";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 32px;
  justify-content: center;
  justify-items: center;

  ${Media.MD} {
    grid-template-columns: repeat(2, minmax(208px, 272px));
    grid-column-gap: 32px;
  }
  ${Media.LG} {
    grid-template-columns: repeat(3, minmax(208px, 272px));
    grid-row-gap: 40px;
  }
  ${Media.XL} {
    grid-template-columns: repeat(4, minmax(208px, 272px));
  }
  ${Media.XXL} {
    grid-template-columns: repeat(3, minmax(208px, 272px));
  }
  ${Media.XXXL} {
    grid-template-columns: repeat(auto-fill, minmax(208px, 272px));
  }
`;

export { Container };

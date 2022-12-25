import styled from "styled-components";
import { Media } from "ui";
import { Header, Navigation } from "components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, auto);

  margin: 0 auto;
  padding: 32px 24px 48px;
  max-width: fit-content;

  ${Media.MD} {
    padding: 40px 24px 56px;
  }
  ${Media.XXXL} {
    /* grid-template-columns: repeat(2, auto); */
    grid-template-columns: auto minmax(880px, 1490px);
    grid-template-rows: 100px auto;
    padding: 40px 60px 64px;
  }
`;

const StyledNavigation = styled(Navigation)`
  ${Media.XXXL} {
    grid-row-start: 1;
    grid-row-end: 3;
    grid-column-start: 1;
    grid-column-end: 2;

    padding-top: 8px;
    margin-right: 146px;
  }
`;
const StyledHeader = styled(Header)`
  ${Media.XXXL} {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 2;
    grid-column-end: 3;
  }
`;

export { Container, StyledNavigation, StyledHeader };

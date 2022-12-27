import { ButtonMenu, Input } from "components";
import styled from "styled-components";

import { Media } from "ui";

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: min-content;
  justify-content: space-between;
  align-items: center;
  grid-row-gap: 32px;

  ${Media.LG} {
    grid-template-columns: 230px auto 88px;
    justify-content: stretch;
  }
  ${Media.XXXL} {
    grid-template-columns: auto 88px;
  }

  width: 100%;

  padding-bottom: 40px;
`;

const StyledSearch = styled(Input)`
  grid-column-start: 1;
  grid-column-end: 3;

  ${Media.LG} {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
  }
  ${Media.XXXL} {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
  }
`;

const StyledMenuButton = styled(ButtonMenu)`
  justify-self: end;
`;

export { StyledHeader, StyledSearch, StyledMenuButton };

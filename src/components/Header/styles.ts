import styled from "styled-components";
import { ButtonMenu, Search } from "../../components";
import { Media } from "../../ui";

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;
  grid-row-gap: 32px;

  ${Media.LG} {
    grid-template-columns: 230px auto 88px;
    justify-content: stretch;
  }

  width: 100%;

  padding-bottom: 40px;
`;

const StyledSearch = styled(Search)`
  grid-column-start: 1;
  grid-column-end: 3;

  ${Media.LG} {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
  }
`;

const StyledMenuButton = styled(ButtonMenu)`
  justify-self: end;
`;

export { StyledHeader, StyledSearch, StyledMenuButton };

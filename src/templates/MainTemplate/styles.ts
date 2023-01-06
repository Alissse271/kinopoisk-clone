import styled from "styled-components";
import { Media } from "ui";
import { Navigation } from "components";

const StyledTemplate = styled.div`
  display: grid;
  grid-template-columns: repeat(1, auto);

  margin: 0 auto;
  padding: 32px 24px 48px;
  max-width: fit-content;
  height: 100vh;

  ${Media.MD} {
    padding: 40px 24px 56px;
  }
  ${Media.LG} {
    grid-row-gap: 48px;
  }
  ${Media.XXL} {
    padding: 40px 176px 56px;
  }
  ${Media.XXXL} {
    grid-template-columns: min-content minmax(880px, 1490px);
    grid-template-rows: 60px auto;
    padding: 40px 60px 64px;
  }
`;
const Container = styled.div`
  ${Media.LG} {
    display: grid;
    grid-template-columns: auto min-content;
    grid-column-gap: 32px;
    align-items: center;
  }
`;

const StyledNavigation = styled(Navigation)`
  margin-bottom: 32px;

  ${Media.LG} {
    order: 1;
    margin-bottom: 0;
  }

  ${Media.XXXL} {
    grid-row-start: 1;
    grid-row-end: 3;

    margin-right: 146px;
  }
`;

export { StyledTemplate, Container, StyledNavigation };

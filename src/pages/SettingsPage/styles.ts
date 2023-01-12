import styled from "styled-components";
import { Media } from "ui";

const StyledSettingsPage = styled.div`
  display: grid;
  grid-template-rows: repeat(2, min-content);
  grid-row-gap: 40px;
  ${Media.LG} {
    grid-row-gap: 48px;
  }
`;
const SettingsBlock = styled.div`
  display: grid;
  grid-template-rows: repeat(3, min-content);
  grid-row-gap: 32px;
`;
const Buttons = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-row-gap: 16px;

  ${Media.LG} {
    grid-template-columns: repeat(2, auto);
    grid-row-gap: 0;
    grid-template-rows: min-content;
    grid-column-gap: 32px;

    & button:nth-of-type(1) {
      order: 2;
    }
  }
  ${Media.XXXXL} {
    grid-column-gap: 40px;
    justify-self: flex-end;
    width: 50%;
  }
`;

export { StyledSettingsPage, SettingsBlock, Buttons };

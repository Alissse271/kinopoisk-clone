import styled from "styled-components";
import { Color, Media, Typography } from "ui";

const StyledColorMode = styled.div`
  display: grid;
  grid-template-rows: repeat(2, min-content);
  grid-row-gap: 16px;
`;
const ThemeMode = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 24px;

  background-color: ${Color.MURK_THEME};
  border-radius: 10px;

  ${Media.LG} {
    padding: 40px;
  }

  ${Media.XXXXL} {
    padding: 24px 40px;
  }
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const CurrentTheme = styled.p`
  ${Typography.S2};
  color: ${Color.DARK_THEME};
`;
const Description = styled.p`
  ${Typography.B1};
`;

export { StyledColorMode, ThemeMode, TextContainer, CurrentTheme, Description };

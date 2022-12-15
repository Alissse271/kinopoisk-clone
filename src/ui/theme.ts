import { css } from "styled-components";

const lightTheme = css`
  html[theme="light"] {
    --white: #000;
    --dark: #242426;
    --light: #fff;
  }
`;
const darkTheme = css`
  html[theme="dark"] {
    --white: #fff;
    --dark: #fff;
    --light: #323537;
  }
`;

export const Theme = { lightTheme, darkTheme };

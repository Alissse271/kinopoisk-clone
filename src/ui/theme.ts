import { css } from "styled-components";

const lightTheme = css`
  html[theme="light"] {
    --white: #fff;
    --dark: #242426;
    --light: #fff;
  }
`;
const darkTheme = css`
  html[theme="dark"] {
    --white: #000;
    --dark: #fff;
    --light: #323537;
  }
`;

export const Theme = { lightTheme, darkTheme };

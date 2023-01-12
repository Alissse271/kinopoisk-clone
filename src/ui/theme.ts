import { css } from "styled-components";

const lightTheme = css`
  html[theme="light"] {
    --white: #fff;
    --dark: #242426;
    --light: #fff;
    --secondary: #afb2b6;
    --grey: #fff;
    --murk: #afb2b6;
  }
`;
const darkTheme = css`
  html[theme="dark"] {
    --white: #000;
    --dark: #fff;
    --light: #323537;
    --secondary: #323537;
    --grey: #242426;
    --murk: #242426;
  }
`;

export const Theme = { lightTheme, darkTheme };

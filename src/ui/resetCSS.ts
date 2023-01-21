import { css } from "styled-components";
import { Color } from "./colors";

export const resetCSS = css`
  body {
    background: ${Color.WHITE_THEME};
  }
  * {
    font-family: "Exo 2", sans-serif;
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
`;

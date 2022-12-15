import { createGlobalStyle } from "styled-components";
import { resetCSS } from "./resetCSS";
import { Theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
    ${resetCSS}
    ${Theme.lightTheme}
    ${Theme.darkTheme}
`;

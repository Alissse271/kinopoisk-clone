import styled from "styled-components";
import { inputStyles } from "ui";

const StyledSearch = styled.input`
  width: 100%;

  ${inputStyles}

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }
`;

export { StyledSearch };

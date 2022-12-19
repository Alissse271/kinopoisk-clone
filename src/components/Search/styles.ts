import styled from "styled-components";
import { Color } from "../../ui";

const StyledSearch = styled.input`
  width: 100%;
  height: 56px;

  padding: 16px 20px;

  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: ${Color.SECONDARY};

  background: ${Color.LIGHT_THEME};

  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border: 2px solid ${Color.SECONDARY_THEME};
  border-radius: 10px;
  &::placeholder {
    color: ${Color.SECONDARY};
  }
  &:focus-visible {
    outline-width: 0px;
  }
  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }
`;

export { StyledSearch };

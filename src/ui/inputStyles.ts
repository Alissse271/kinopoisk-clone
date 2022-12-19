import { css } from "styled-components";
import { Color } from "./colors";
import { Typography } from "./typography";

export const inputStyles = css`
  padding: 16px 16px 16px 20px;

  ${Typography.S5}
  color: ${Color.DARK_THEME};

  background: ${Color.LIGHT_THEME};
  border: 2px solid ${Color.SECONDARY_THEME};
  border-radius: 10px;

  &::placeholder {
    color: ${Color.SECONDARY};
  }

  &:focus {
    border: 2px solid ${Color.PRIMARY};
  }
  &:focus-visible {
    outline: none;
  }

  &:disabled {
    background: ${Color.SECONDARY};
    border: 2px solid ${Color.SECONDARY};
  }
  &:disabled::placeholder {
    color: ${Color.LIGHT};
  }
  &:invalid {
    border: 2px solid ${Color.ERROR};
  }
`;

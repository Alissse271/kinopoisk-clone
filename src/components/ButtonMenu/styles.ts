import { burgerMenu, close } from "assets";
import styled from "styled-components";
import { Color } from "ui";

const StyledButton = styled.button<{ open: boolean }>`
  width: 56px;
  height: 56px;

  background: center no-repeat url(${burgerMenu}), ${Color.PRIMARY};
  background: ${({ open }) =>
    open
      ? `center no-repeat url(${close}), ${Color.PRIMARY}`
      : `center no-repeat url(${burgerMenu}), ${Color.PRIMARY}`};
  border-radius: 10px;

  cursor: pointer;
`;

export { StyledButton };

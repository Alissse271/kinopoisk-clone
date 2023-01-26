import { burgerMenu, close } from "assets";
import styled from "styled-components";
import { Color } from "ui";

const StyledButton = styled.button<{ open: boolean }>`
  position: ${({ open }) => (open ? "fixed" : "relative")};
  top: ${({ open }) => (open ? "64px" : "0")};
  right: ${({ open }) => (open ? "12px" : "0")};

  width: 56px;
  height: 56px;

  background: ${({ open }) =>
    open
      ? `center no-repeat url(${close}), ${Color.PRIMARY}`
      : `center no-repeat url(${burgerMenu}), ${Color.PRIMARY}`};
  border-radius: 10px;

  cursor: pointer;
  z-index: 10;
`;

export { StyledButton };

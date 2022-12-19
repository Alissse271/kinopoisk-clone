import styled from "styled-components";
import { Color } from "../../ui";
import burgerMenu from "../../assets/icons/burger-menu.svg";

const StyledButton = styled.button`
  width: 56px;
  height: 56px;

  background: center no-repeat url(${burgerMenu}), ${Color.PRIMARY};
  border-radius: 10px;

  cursor: pointer;
`;

export { StyledButton };

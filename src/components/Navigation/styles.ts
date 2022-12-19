import styled from "styled-components";
import { Color, Typography } from "../../ui";

const StyledNavigation = styled.nav`
  display: grid;
  grid-template-rows: repeat(4);
  grid-row-gap: 40px;

  padding: 46px 49px 0 0;

  background: ${Color.WHITE_THEME};
`;

const LinkText = styled.span`
  ${Typography.S4}

  padding-left: 20px;
`;

export { StyledNavigation, LinkText };

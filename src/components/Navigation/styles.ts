import styled from "styled-components";
import { Color, Typography } from "../../ui";
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Links = styled.nav`
  flex: 1 0 auto;
  display: grid;
  grid-template-rows: repeat(4, 24px);

  grid-row-gap: 40px;

  padding-top: 64px;

  background: ${Color.WHITE_THEME};
`;

const LinkText = styled.span`
  ${Typography.S4}

  padding-left: 20px;
`;

const CopyRight = styled.p`
  padding-top: 770px;
  ${Typography.S5}
  color: ${Color.LIGHT};
`;

export { Links, LinkText, Container, CopyRight };

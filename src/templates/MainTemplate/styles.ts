import styled from "styled-components";
import { Color } from "../../ui";

const Container = styled.div`
  padding: 32px 24px 48px;

  background: ${Color.WHITE_THEME};
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 40px;
`;

export { Container, Header };

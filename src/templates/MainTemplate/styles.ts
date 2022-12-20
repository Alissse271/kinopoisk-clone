import styled from "styled-components";
import { Color, Media } from "../../ui";

const Container = styled.div`
  margin: 0 auto;
  padding: 32px 24px 48px;

  ${Media.XXL} {
    max-width: 1024px;
  }
`;
const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 40px;
`;

export { Container, Header };

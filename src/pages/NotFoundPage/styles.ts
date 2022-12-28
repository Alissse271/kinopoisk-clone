import styled from "styled-components";
import { Color } from "ui";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;
`;
const NotFoundNumber = styled.p`
  font-size: 48px;
  color: ${Color.LIGHT};
`;
const NotFoundText = styled.p`
  font-size: 32px;
  padding-top: 10px;
`;

export { Container, NotFoundText, NotFoundNumber };

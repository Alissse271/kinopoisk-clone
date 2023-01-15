import styled from "styled-components";
import { Color, Typography } from "ui";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ErrorText = styled.p`
  padding: 20px 0;
  ${Typography.S2};
  color: ${Color.ERROR};
`;

export { Container, ErrorText };

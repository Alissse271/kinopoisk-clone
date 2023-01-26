import styled from "styled-components";
import { Typography, Color } from "ui";
const Container = styled.div``;
const LoadingText = styled.span`
  ${Typography.H2};
`;
const ErrorText = styled.p`
  padding: 20px 0;
  ${Typography.S2};
  color: ${Color.ERROR};
`;
export { Container, LoadingText, ErrorText };

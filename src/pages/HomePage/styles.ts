import styled from "styled-components";
import { Typography } from "ui";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LoadingText = styled.p`
  padding: 20px 0;
  ${Typography.S2};
`;

export { Container, LoadingText };

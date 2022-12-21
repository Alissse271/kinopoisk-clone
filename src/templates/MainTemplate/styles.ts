import styled from "styled-components";
import { Media } from "../../ui";

const Container = styled.div`
  margin: 0 auto;
  padding: 32px 24px 48px;

  ${Media.XXL} {
    max-width: 1024px;
  }
`;

export { Container };

import styled from "styled-components";
import { Media } from "ui";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  width: 100%;
  height: 100vh;

  z-index: 10;

  ${Media.LG} {
    background: rgba(16, 16, 16, 0.7);
  }
`;

export { Container };

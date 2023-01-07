import styled from "styled-components";
import { Media, Typography } from "ui";

const Card = styled.div`
  position: relative;
  max-width: 272px;
`;

const ImageContainer = styled.div`
  height: 400px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;

  border-radius: 10px;
`;
const Name = styled.p`
  padding-top: 20px;

  ${Media.SM} {
    padding-top: 24px;
  }
  ${Typography.S2}
`;

export { Name, Card, Image, ImageContainer };

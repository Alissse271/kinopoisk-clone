import styled from "styled-components";
import { Media, Typography } from "ui";

const Card = styled.div`
  position: relative;
  max-width: 272px;
  width: 100%;
`;

const ImageContainer = styled.div`
  min-width: 208px;
  height: 365px;

  ${Media.LG} {
    height: 279px;
  }
  ${Media.XXL} {
    height: 357px;
  }
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

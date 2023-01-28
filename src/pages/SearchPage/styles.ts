import { Loader, ShowMoreButton } from "components";
import styled from "styled-components";
import { Color, Media, Typography } from "ui";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledShowMoreButton = styled(ShowMoreButton)`
  margin-top: 48px;

  ${Media.LG} {
    margin-top: 56px;
  }
  ${Media.XXXXL} {
    margin-top: 64px;
  }
`;

const StyledLoader = styled(Loader)`
  margin-bottom: 20px;
`;
const ErrorText = styled.p`
  padding: 20px 0;

  ${Typography.S2};
  color: ${Color.ERROR};
`;

export { Container, ErrorText, StyledShowMoreButton, StyledLoader };

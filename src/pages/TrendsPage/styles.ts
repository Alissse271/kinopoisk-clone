import { TitleMain } from "components";
import styled from "styled-components";
import { Media, Typography } from "ui";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LoadingText = styled.p`
  padding: 20px 0;
  ${Typography.S2};
`;
const StyledTitle = styled(TitleMain)`
  align-self: flex-start;
  margin-bottom: 32px;

  ${Media.LG} {
    margin-bottom: 40px;
  }
`;
export { Container, LoadingText, StyledTitle };

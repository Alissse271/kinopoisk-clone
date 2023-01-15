import { TitleMain } from "components";
import styled from "styled-components";
import { Media } from "ui";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledTitle = styled(TitleMain)`
  align-self: flex-start;
  margin-bottom: 32px;

  ${Media.LG} {
    margin-bottom: 40px;
  }
`;
export { Container, StyledTitle };

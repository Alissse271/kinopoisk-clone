import styled from "styled-components";
import { Color, Media, Typography } from "ui";

const StyledAccountInfo = styled.div`
  display: grid;
  grid-template-rows: repeat(2, min-content);
  grid-row-gap: 16px;
`;
const AccountContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-row-gap: 20px;

  padding: 24px;

  background-color: ${Color.MURK_THEME};
  border-radius: 10px;

  ${Media.LG} {
    grid-template-columns: repeat(2, auto);
    grid-column-gap: 32px;
    grid-row-gap: 0;
    padding: 40px;
  }
  ${Media.XXXXL} {
    grid-column-gap: 40px;
  }
`;
const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-row-gap: 8px;
`;
const Title = styled.p`
  ${Typography.B1};
`;
const UserInfoContainer = styled.div`
  width: 100%;
  padding: 16px 20px;
  background-color: ${Color.LIGHT_THEME};
  border-radius: 10px;
`;
const UserInfo = styled.p`
  ${Typography.S5}
  color: ${Color.DARK_THEME};
`;

export { StyledAccountInfo, AccountContainer, Container, Title, UserInfoContainer, UserInfo };

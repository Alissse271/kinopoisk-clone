import { TitleMedium } from "components";
import {
  StyledAccountInfo,
  AccountContainer,
  Container,
  Title,
  UserInfoContainer,
  UserInfo,
} from "./styles";

export const AccountInfo = () => {
  const users = JSON.parse(localStorage.getItem("userInfo")!);
  return (
    <StyledAccountInfo>
      <TitleMedium label="Profile" />
      <AccountContainer>
        <Container>
          <Title>Name</Title>
          <UserInfoContainer>
            <UserInfo>{users !== null && users.map((user: any) => user.name)}</UserInfo>
          </UserInfoContainer>
        </Container>
        <Container>
          <Title>Email</Title>
          <UserInfoContainer>
            <UserInfo>{users !== null && users.map((user: any) => user.email)}</UserInfo>
          </UserInfoContainer>
        </Container>
      </AccountContainer>
    </StyledAccountInfo>
  );
};

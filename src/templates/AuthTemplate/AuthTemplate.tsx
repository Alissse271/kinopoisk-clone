import { Outlet } from "react-router-dom";
import { ROUTE } from "../../router";
import { Container, StyledLink, TextRights, Logo } from "./styles";
import logo from "../../assets/icons/logo.svg";

export const AuthTemplate = () => {
  return (
    <Container>
      <StyledLink to={ROUTE.HOME}>
        <Logo src={logo} alt="pixema" />
      </StyledLink>
      <Outlet />
      <TextRights>© All Rights Reserved</TextRights>
    </Container>
  );
};

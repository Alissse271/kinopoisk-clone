import { Outlet } from "react-router-dom";
import { ROUTE } from "../../router";
import { Container, StyledLink, TextRights } from "./styles";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";
import { Color } from "../../ui";

export const AuthTemplate = () => {
  return (
    <Container>
      <StyledLink to={ROUTE.HOME}>
        <LogoIcon fill={Color.WHITE} />
      </StyledLink>
      <Outlet />
      <TextRights>© All Rights Reserved</TextRights>
    </Container>
  );
};

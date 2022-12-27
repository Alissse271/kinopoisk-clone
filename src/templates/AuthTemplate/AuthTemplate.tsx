import { Outlet } from "react-router-dom";
import { ROUTE } from "router";
import { Container, StyledLink, TextRights } from "./styles";
import { Color } from "ui";
import { LogoIcon } from "assets";

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

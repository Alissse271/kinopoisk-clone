import { Outlet } from "react-router-dom";
import { ROUTE } from "router";
import { Container, StyledLink, TextRights } from "./styles";
import { Color } from "ui";
import { LogoIcon } from "assets";
import { getTheme, useAppSelector } from "store";
import { useEffect } from "react";

export const AuthTemplate = () => {
  const { theme } = useAppSelector(getTheme);
  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);
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

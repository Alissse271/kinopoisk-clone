import { Outlet } from "react-router-dom";
import { ROUTE } from "router";
import { Container, StyledLink, TextRights } from "./styles";
import { Color } from "ui";
import { LogoIcon } from "assets";
import { useAppSelector } from "store";
import { useEffect } from "react";

export const AuthTemplate = () => {
  const { darkMode } = useAppSelector((state) => state.theme);
  useEffect(() => {
    document.documentElement.setAttribute("theme", darkMode);
  }, [darkMode]);
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

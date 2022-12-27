import { Outlet } from "react-router-dom";
import { useWindowSize } from "hooks";
import { Container, StyledHeader, StyledNavigation } from "./styles";
import { setTheme, useAppSelector } from "store";
import { useEffect } from "react";

export const MainTemplate = () => {
  const { width = 0 } = useWindowSize();
  const { theme } = useAppSelector(setTheme);
  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);
  return (
    <Container>
      {width >= 1440 && <StyledNavigation />}
      <StyledHeader />
      <Outlet />
    </Container>
  );
};

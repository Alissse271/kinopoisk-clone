import { Outlet } from "react-router-dom";
import { useWindowSize } from "hooks";

import { Container, StyledHeader, StyledNavigation } from "./styles";
import { useEffect } from "react";
import { useAppSelector } from "store";

export const MainTemplate = () => {
  const { width = 0 } = useWindowSize();
  const { darkMode } = useAppSelector((state) => state.theme);
  useEffect(() => {
    document.documentElement.setAttribute("theme", darkMode);
  }, [darkMode]);
  return (
    <Container>
      {width >= 1440 && <StyledNavigation />}
      <StyledHeader />
      <Outlet />
    </Container>
  );
};

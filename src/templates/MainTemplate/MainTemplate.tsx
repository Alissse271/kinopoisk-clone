import { Outlet } from "react-router-dom";
import { useWindowSize } from "hooks";
import { StyledTemplate, Container, StyledNavigation } from "./styles";
import { getTheme, useAppSelector } from "store";
import { useEffect } from "react";
import { Header } from "components";

export const MainTemplate = () => {
  const { width = 0 } = useWindowSize();
  const { theme } = useAppSelector(getTheme);
  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);
  return (
    <StyledTemplate>
      {width >= 1440 ? (
        <>
          <StyledNavigation />
          <Header />
        </>
      ) : (
        <Container>
          <StyledNavigation />
          <Header />
        </Container>
      )}
      <Outlet />
    </StyledTemplate>
  );
};

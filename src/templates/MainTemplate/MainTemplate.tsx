import { Outlet } from "react-router-dom";
import { useMediaQuery } from "../../hooks";

import { Container, StyledHeader, StyledNavigation } from "./styles";

export const MainTemplate = () => {
  const isDesktopResolution = useMediaQuery("(min-width: 1440px)");
  return (
    <Container>
      {isDesktopResolution && <StyledNavigation />}
      <StyledHeader />
      <Outlet />
    </Container>
  );
};

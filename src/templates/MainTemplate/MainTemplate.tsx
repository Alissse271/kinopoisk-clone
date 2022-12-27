import { Outlet } from "react-router-dom";
import { useWindowSize } from "hooks";
import { Container, StyledHeader, StyledNavigation } from "./styles";

export const MainTemplate = () => {
  const { width = 0 } = useWindowSize();
  return (
    <Container>
      {width >= 1440 && <StyledNavigation />}
      <StyledHeader />
      <Outlet />
    </Container>
  );
};

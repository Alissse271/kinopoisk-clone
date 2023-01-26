import { Outlet } from "react-router-dom";
import { useToggle, useWindowSize } from "hooks";
import { StyledTemplate, Container, StyledNavigation } from "./styles";
import { getTheme, useAppSelector } from "store";
import { useEffect } from "react";
import { FiltersModal, Header } from "components";

export const MainTemplate = () => {
  const [isOpen, toggleModal] = useToggle();
  const [isMenuOpen, toggleMenu] = useToggle();
  const { width = 0 } = useWindowSize();
  const { theme } = useAppSelector(getTheme);
  const isMobile = width <= 1440;

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);

  return (
    <StyledTemplate>
      {width >= 1440 ? (
        <>
          <StyledNavigation isOpen={isMenuOpen} isMobile={isMobile} handleClose={toggleMenu} />
          <Header toggleModal={toggleModal} />
        </>
      ) : (
        <Container>
          <StyledNavigation isOpen={isMenuOpen} isMobile={isMobile} handleClose={toggleMenu} />
          <Header toggleModal={toggleModal} />
        </Container>
      )}
      <Outlet />
      <FiltersModal toggleModal={toggleModal} isOpen={isOpen} />
    </StyledTemplate>
  );
};

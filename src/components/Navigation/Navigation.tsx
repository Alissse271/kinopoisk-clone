import { ROUTE } from "router";
import {
  Links,
  Container,
  CopyRight,
  StyledMenuButton,
  StyledNavigation,
  StyledLogo,
  StyledCustomNavLink,
} from "./styles";
import { Color } from "ui";

import { FavoritesIcon, HomeIcon, LogoIcon, SettingsIcon, TrendsIcon } from "assets";
import { useWindowSize } from "hooks";
import { useState } from "react";

interface IProps {
  className?: string;
}

export const Navigation = ({ className }: IProps) => {
  const [open, setOpen] = useState(false);
  const { width = 0 } = useWindowSize();
  const handleClose = () => setOpen(!open);
  return (
    <Container className={className}>
      {(width >= 1440 || width < 768) && (
        <StyledLogo to={ROUTE.HOME}>
          <LogoIcon fill={Color.DARK_THEME} />
        </StyledLogo>
      )}
      {width < 1440 && <StyledMenuButton type="button" label="" open={open} setOpen={setOpen} />}
      <StyledNavigation open={open}>
        <Links>
          <StyledCustomNavLink onClick={handleClose} to={ROUTE.HOME}>
            <HomeIcon />
            Home
          </StyledCustomNavLink>
          <StyledCustomNavLink onClick={handleClose} to={ROUTE.TRENDS}>
            <TrendsIcon />
            Trends
          </StyledCustomNavLink>
          <StyledCustomNavLink onClick={handleClose} to={ROUTE.FAVORITES}>
            <FavoritesIcon />
            Favorites
          </StyledCustomNavLink>
          <StyledCustomNavLink onClick={handleClose} to={ROUTE.SETTINGS}>
            <SettingsIcon />
            Settings
          </StyledCustomNavLink>
        </Links>
        <CopyRight>© All Rights Reserved</CopyRight>
      </StyledNavigation>
    </Container>
  );
};

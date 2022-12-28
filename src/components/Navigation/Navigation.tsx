import { ROUTE } from "router";
import {
  LinkText,
  Links,
  Container,
  CopyRight,
  StyledMenuButton,
  StyledNavigation,
  StyledLogo,
} from "./styles";
import { Color } from "ui";
import { CustomNavLink } from "components";
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
          <CustomNavLink onClick={handleClose} to={ROUTE.HOME}>
            <HomeIcon />
            <LinkText>Home</LinkText>
          </CustomNavLink>
          <CustomNavLink onClick={handleClose} to={ROUTE.TRENDS}>
            <TrendsIcon />
            <LinkText>Trends</LinkText>
          </CustomNavLink>
          <CustomNavLink onClick={handleClose} to={ROUTE.FAVORITES}>
            <FavoritesIcon />
            <LinkText>Favorites</LinkText>
          </CustomNavLink>
          <CustomNavLink onClick={handleClose} to={ROUTE.SETTINGS}>
            <SettingsIcon />
            <LinkText>Settings</LinkText>
          </CustomNavLink>
        </Links>
        <CopyRight>© All Rights Reserved</CopyRight>
      </StyledNavigation>
    </Container>
  );
};

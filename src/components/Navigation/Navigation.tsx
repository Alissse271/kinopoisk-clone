import { ROUTE } from "router";
import { LinkText, Links, Container, CopyRight } from "./styles";
import { Color } from "ui";
import { CustomNavLink } from "components";
import { FavoritesIcon, HomeIcon, LogoIcon, SettingsIcon, TrendsIcon } from "assets";
import { Link } from "react-router-dom";

interface IProps {
  className?: string;
}

export const Navigation = ({ className }: IProps) => {
  return (
    <Container className={className}>
      <Link to={ROUTE.HOME}>
        <LogoIcon fill={Color.DARK_THEME} />
      </Link>
      <Links>
        <CustomNavLink to={ROUTE.HOME}>
          <HomeIcon />
          <LinkText>Home</LinkText>
        </CustomNavLink>
        <CustomNavLink to={ROUTE.TRENDS}>
          <TrendsIcon />
          <LinkText>Trends</LinkText>
        </CustomNavLink>
        <CustomNavLink to={ROUTE.FAVORITES}>
          <FavoritesIcon />
          <LinkText>Favorites</LinkText>
        </CustomNavLink>
        <CustomNavLink to={ROUTE.SETTINGS}>
          <SettingsIcon />
          <LinkText>Settings</LinkText>
        </CustomNavLink>
      </Links>
      <CopyRight>© All Rights Reserved</CopyRight>
    </Container>
  );
};

import { ROUTE } from "../../router";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";
import { CustomNavLink } from "../CustomNavLink/CustomNavLink";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as TrendsIcon } from "../../assets/icons/trends.svg";
import { ReactComponent as FavoritesIcon } from "../../assets/icons/favorites.svg";
import { ReactComponent as SettingsIcon } from "../../assets/icons/settings.svg";
import { LinkText, Links, Container, CopyRight } from "./styles";
import { Color } from "../../ui";

interface IProps {
  className?: string;
}

export const Navigation = ({ className }: IProps) => {
  return (
    <Container className={className}>
      <LogoIcon fill={Color.DARK_THEME} />
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

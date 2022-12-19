import { ROUTE } from "../../router";
import { CustomNavLink } from "../CustomNavLink/CustomNavLink";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as TrendsIcon } from "../../assets/icons/trends.svg";
import { ReactComponent as FavoritesIcon } from "../../assets/icons/favorites.svg";
import { ReactComponent as SettingsIcon } from "../../assets/icons/settings.svg";
import { LinkText, StyledNavigation } from "./styles";

export const Navigation = () => {
  return (
    <StyledNavigation>
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
    </StyledNavigation>
  );
};

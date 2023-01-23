import { ROUTE } from "router";
import {
  Links,
  Container,
  CopyRight,
  StyledNavigation,
  StyledLogo,
  StyledCustomNavLink,
} from "./styles";
import { Color } from "ui";
import { FavoritesIcon, HomeIcon, LogoIcon, SettingsIcon, TrendsIcon, UserIcon } from "assets";
import { useWindowSize } from "hooks";
import { ButtonMenu } from "components";
import { getLogOutUser, useAppDispatch } from "store";
import { useNavigate } from "react-router-dom";

interface IProps {
  className?: string;
  isOpen: boolean;
  isMobile: boolean;
  handleClose: () => void;
}

const menuVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "100%" },
  idle: {},
};

export const Navigation = ({ isOpen, isMobile, handleClose, className }: IProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentVariant = isMobile ? (isOpen ? "open" : "closed") : "idle";
  const { width = 0 } = useWindowSize();
  const handleLogOut = () => {
    dispatch(getLogOutUser());
    navigate(ROUTE.HOME);
  };
  return (
    <Container className={className}>
      {(width >= 1440 || width < 768) && (
        <StyledLogo to={ROUTE.HOME}>
          <LogoIcon fill={Color.DARK_THEME} />
        </StyledLogo>
      )}
      {width < 1440 && <ButtonMenu type="button" open={isOpen} togleMenu={handleClose} />}
      <StyledNavigation animate={currentVariant} variants={menuVariants} initial="idle">
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
          {width < 1440 && (
            <StyledCustomNavLink onClick={handleLogOut} to={ROUTE.SETTINGS}>
              <UserIcon />
              Log Out
            </StyledCustomNavLink>
          )}
        </Links>
        <CopyRight>© All Rights Reserved</CopyRight>
      </StyledNavigation>
    </Container>
  );
};

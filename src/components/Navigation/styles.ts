import { CustomNavLink } from "components";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color, Media, Typography } from "ui";
import { motion } from "framer-motion";

const Container = styled.div`
  display: grid;
  grid-template-columns: min-content min-content;
  grid-template-rows: min-content;
  align-items: flex-start;
  justify-content: space-between;

  ${Media.LG} {
    grid-template-columns: min-content;
  }
`;

const StyledLogo = styled(Link)`
  padding-top: 8px;
`;

const StyledNavigation = styled(motion.div)`
  position: fixed;
  right: 0;
  top: 0;

  display: flex;
  flex-direction: column;

  height: fill-available;
  width: 100%;

  padding-left: 48px;
  padding-bottom: 20px;

  background: ${Color.WHITE_THEME};
  z-index: 2;

  ${Media.SM} {
    width: 320px;
  }
  ${Media.XXXL} {
    position: relative;

    width: 100%;

    padding-left: 0;
    padding-bottom: 0;

    background: inherit;
    transform: none;
  }
`;
const Links = styled.nav`
  display: grid;
  grid-template-rows: repeat(5, 24px);
  grid-row-gap: 40px;
  flex-grow: 1;

  padding-top: 64px;
`;

const StyledCustomNavLink = styled(CustomNavLink)`
  ${Typography.S4};
  svg {
    margin-right: 20px;
  }
`;

const CopyRight = styled.p`
  ${Typography.S5}
  color: ${Color.LIGHT};
`;
export { StyledNavigation, Links, Container, CopyRight, StyledLogo, StyledCustomNavLink };

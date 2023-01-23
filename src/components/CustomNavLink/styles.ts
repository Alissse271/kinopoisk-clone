import { NavLink, PathMatch } from "react-router-dom";
import styled from "styled-components";
import { Color } from "ui";

const StyledNavLink = styled(NavLink)<{ $isActive: PathMatch<"*"> | null }>`
  display: flex;
  align-items: center;

  text-decoration: none;
  color: ${({ $isActive }) => ($isActive ? `${Color.PRIMARY}` : `${Color.SECONDARY}`)};

  &:hover svg,
  &:hover {
    color: ${Color.PRIMARY_LIGHT};
    fill: ${Color.PRIMARY_LIGHT};
  }

  svg {
    fill: ${({ $isActive }) => ($isActive ? `${Color.PRIMARY}` : `${Color.SECONDARY}`)};
  }
`;

export { StyledNavLink };

import { ReactNode } from "react";
import { useMatch } from "react-router-dom";
import { ROUTE } from "router";
import { StyledNavLink } from "./styles";

interface IProps {
  children: ReactNode;
  to: ROUTE;
  onClick: () => void;
}

export const CustomNavLink = ({ children, to, onClick }: IProps) => {
  const match = useMatch(to);
  return (
    <StyledNavLink onClick={onClick} $isActive={match} to={to}>
      {children}
    </StyledNavLink>
  );
};

import { memo, ReactNode } from "react";
import { useMatch } from "react-router-dom";
import { ROUTE } from "router";
import { StyledNavLink } from "./styles";

interface IProps {
  children: ReactNode;
  to: ROUTE;
  onClick: () => void;
  className?: string;
}

export const CustomNavLink = memo(({ children, to, onClick, className }: IProps) => {
  const match = useMatch(to);
  return (
    <StyledNavLink onClick={onClick} $isActive={match} to={to} className={className}>
      {children}
    </StyledNavLink>
  );
});

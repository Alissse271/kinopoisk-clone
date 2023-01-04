import { StyledBadge, StyledIcon } from "./styles";

interface IProps {
  color: string;
  label: string;
  icon?: boolean;
  className?: string;
}

export const Badge = ({ color, label, icon, className }: IProps) => {
  return (
    <StyledBadge className={className} color={color}>
      {icon && <StyledIcon />}
      {label}
    </StyledBadge>
  );
};

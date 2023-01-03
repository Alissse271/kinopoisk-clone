import { StyledBadge, StyledIcon } from "./styles";

interface IProps {
  color: string;
  label: string;
  icon?: boolean;
}

export const Badge = ({ color, label, icon }: IProps) => {
  return (
    <StyledBadge color={color}>
      {icon && <StyledIcon />}
      {label}
    </StyledBadge>
  );
};

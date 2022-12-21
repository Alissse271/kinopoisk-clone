import { StyledButton } from "./styles";

interface IButton {
  type: "button";
  label: string;
  className?: string;
}

export const ButtonMenu = ({ type, label, className }: IButton) => {
  return (
    <StyledButton className={className} type={type}>
      {label}
    </StyledButton>
  );
};

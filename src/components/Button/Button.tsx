import { StyledButton } from "./styles";

interface IButton {
  type: "button" | "submit" | "reset";
  label: string;
  onClick?: () => void;
  primary?: true;
  secondary?: true;
}

export const Button = ({ type, label, onClick, secondary, primary }: IButton) => {
  return (
    <StyledButton primary={primary} secondary={secondary} type={type} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

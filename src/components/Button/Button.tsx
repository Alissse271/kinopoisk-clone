import { StyledButton } from "./styles";

interface IButton {
  type: "button" | "submit" | "reset";
  label: string;
  primary?: true;
  secondary?: true;
}

export const Button = ({ type, label, secondary, primary }: IButton) => {
  return (
    <StyledButton primary={primary} secondary={secondary} type={type}>
      {label}
    </StyledButton>
  );
};

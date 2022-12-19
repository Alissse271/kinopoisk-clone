import { StyledButton } from "./styles";

interface IButton {
  type: "button" | "submit" | "reset";
  label: string;
}

export const ButtonPrimary = ({ type, label }: IButton) => {
  return <StyledButton type={type}>{label}</StyledButton>;
};

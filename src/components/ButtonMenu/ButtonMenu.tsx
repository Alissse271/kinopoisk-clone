import { StyledButton } from "./styles";

interface IButton {
  type: "button";
  label: string;
}

export const ButtonMenu = ({ type, label }: IButton) => {
  return <StyledButton type={type}>{label}</StyledButton>;
};

import { ClipLoader } from "components";
import { StyledButton } from "./styles";

interface IButton {
  type: "button" | "submit" | "reset";
  label: string;
  onClick?: () => void;
  primary?: boolean;
  secondary?: boolean;
  loader?: boolean;
}

export const Button = ({ type, label, onClick, secondary, primary, loader }: IButton) => {
  return (
    <StyledButton primary={primary} secondary={secondary} type={type} onClick={onClick}>
      {label}
      {loader && <ClipLoader loading={loader} />}
    </StyledButton>
  );
};

import { ClipLoader } from "components";
import { ButtonHTMLAttributes, memo } from "react";
import { StyledButton } from "./styles";

interface IButton {
  type: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  label: string;
  onClick?: () => void;
  primary?: boolean;
  secondary?: boolean;
  loader?: boolean;
}

export const Button = memo(({ type, label, onClick, secondary, primary, loader }: IButton) => {
  return (
    <StyledButton primary={primary} secondary={secondary} type={type} onClick={onClick}>
      {label}
      {loader && <ClipLoader loading={loader} />}
    </StyledButton>
  );
});

import { memo } from "react";
import { StyledButton } from "./styles";

interface IButton {
  type: "button";
  className?: string;
  open: boolean;
  togleMenu: () => void;
}

export const ButtonMenu = memo(({ type, className, open, togleMenu }: IButton) => {
  return (
    <StyledButton className={className} type={type} open={open} onClick={togleMenu}></StyledButton>
  );
});

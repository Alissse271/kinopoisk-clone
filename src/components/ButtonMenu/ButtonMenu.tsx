import { StyledButton } from "./styles";

interface IButton {
  type: "button";
  label: string;
  className?: string;
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const ButtonMenu = ({ type, label, className, open, setOpen }: IButton) => {
  return (
    <StyledButton className={className} type={type} open={open} onClick={() => setOpen(!open)}>
      {label}
    </StyledButton>
  );
};

import { memo } from "react";
import { StyledTitle } from "./styles";

interface TitleProps {
  label: string;
  className?: string;
}

export const TitleMain = memo(({ label, className }: TitleProps) => {
  return <StyledTitle className={className}>{label}</StyledTitle>;
});

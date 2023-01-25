import { memo } from "react";
import { StyledTitle } from "./styles";

interface TitleProps {
  label: string;
}

export const TitleMedium = memo(({ label }: TitleProps) => {
  return <StyledTitle>{label}</StyledTitle>;
});

import { StyledTitle } from "./styles";

interface ITitle {
  label: string;
  className?: string;
}

export const TitleMain = ({ label, className }: ITitle) => {
  return <StyledTitle className={className}>{label}</StyledTitle>;
};

import { StyledTitle } from "./styles";

interface ITitle {
  label: string;
}

export const TitleMedium = ({ label }: ITitle) => {
  return <StyledTitle>{label}</StyledTitle>;
};

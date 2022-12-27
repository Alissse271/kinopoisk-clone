import { ChangeEvent, HTMLInputTypeAttribute } from "react";
import { StyledSearch } from "./styles";

interface IInput {
  type: HTMLInputTypeAttribute;
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props: IInput) => {
  return <StyledSearch {...props} />;
};

import { ChangeEvent, HTMLInputTypeAttribute, memo } from "react";
import { StyledSearch } from "./styles";

interface InputProps {
  type: HTMLInputTypeAttribute;
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = memo((props: InputProps) => {
  return <StyledSearch {...props} />;
});

import { ChangeEvent } from "react";
import { StyledSearch } from "./styles";

interface IInput {
  type: "search";
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Search = ({ type, placeholder, value, onChange }: IInput) => {
  return <StyledSearch type={type} placeholder={placeholder} value={value} onChange={onChange} />;
};

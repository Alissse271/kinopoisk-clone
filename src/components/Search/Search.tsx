import { ChangeEvent, HTMLInputTypeAttribute } from "react";
import { StyledSearch } from "./styles";

interface ISearch {
  type: HTMLInputTypeAttribute;
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Search = (props: ISearch) => {
  return <StyledSearch {...props} />;
};

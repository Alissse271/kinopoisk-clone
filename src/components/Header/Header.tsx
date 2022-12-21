import { useDebounce, useInput } from "../../hooks";
import { Color } from "../../ui";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";
import { StyledHeader, StyledMenuButton, StyledSearch } from "./styles";

export const Header = () => {
  const search = useInput();
  const debouncedValue = useDebounce(search.value, 500);
  return (
    <StyledHeader>
      <LogoIcon fill={Color.DARK_THEME} />
      <StyledMenuButton type={"button"} label={""} />
      <StyledSearch type="search" placeholder="Search" {...search} />
    </StyledHeader>
  );
};

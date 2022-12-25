import { LogoIcon } from "assets";
import { useDebounce, useInput, useWindowSize } from "hooks";
import { Color } from "ui";
import { StyledHeader, StyledMenuButton, StyledSearch } from "./styles";

interface IProps {
  className?: string;
}

export const Header = ({ className }: IProps) => {
  const search = useInput();
  const debouncedValue = useDebounce(search.value, 500);
  const { width = 0 } = useWindowSize();
  return (
    <StyledHeader className={className}>
      {width < 1440 && <LogoIcon fill={Color.DARK_THEME} />}
      <StyledMenuButton type="button" label="" />
      <StyledSearch type="search" placeholder="Search" {...search} />
    </StyledHeader>
  );
};

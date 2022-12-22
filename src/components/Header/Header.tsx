import { useDebounce, useInput, useMediaQuery } from "../../hooks";
import { Color } from "../../ui";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";
import { StyledHeader, StyledMenuButton, StyledSearch } from "./styles";

interface IProps {
  className?: string;
}

export const Header = ({ className }: IProps) => {
  const search = useInput();
  const debouncedValue = useDebounce(search.value, 500);
  const isDesktopResolution = useMediaQuery("(max-width: 1439px)");
  return (
    <StyledHeader className={className}>
      {isDesktopResolution && <LogoIcon fill={Color.DARK_THEME} />}
      <StyledMenuButton type={"button"} label={""} />
      <StyledSearch type="search" placeholder="Search" {...search} />
    </StyledHeader>
  );
};

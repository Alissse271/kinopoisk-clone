import { LogoIcon } from "assets";
import { HeaderAccount, Input } from "components";
import { useDebounce, useInput, useWindowSize } from "hooks";
import { Link } from "react-router-dom";
import { ROUTE } from "router";
import { Color } from "ui";
import { StyledHeader } from "./styles";

interface IProps {
  className?: string;
}

export const Header = ({ className }: IProps) => {
  const search = useInput();
  const debouncedValue = useDebounce(search.value, 500);
  const { width = 0 } = useWindowSize();
  return (
    <StyledHeader className={className}>
      {width < 1440 && width >= 768 && (
        <Link to={ROUTE.HOME}>
          <LogoIcon fill={Color.DARK_THEME} />
        </Link>
      )}
      <Input type="search" placeholder="Search" {...search} />
      {width >= 1440 && <HeaderAccount />}
    </StyledHeader>
  );
};

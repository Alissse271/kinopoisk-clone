import { Outlet } from "react-router-dom";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";
import { ButtonMenu, Navigation, Search } from "../../components";
import { useDebounce, useInput } from "../../hooks";
import { Color } from "../../ui";
import { Container, Header } from "./styles";

export const MainTemplate = () => {
  const search = useInput();
  const debouncedValue = useDebounce(search.value, 500);
  return (
    <Container>
      {/* <Navigation /> */}
      <Header>
        <LogoIcon fill={Color.DARK_THEME} />
        <ButtonMenu type={"button"} label={""} />
        <Search type="search" placeholder="Search" {...search} />
      </Header>
      <Outlet />
    </Container>
  );
};

import { Outlet } from "react-router-dom";
import { Header, Navigation } from "../../components";
import { Container } from "./styles";

export const MainTemplate = () => {
  return (
    <Container>
      <Navigation />
      <Header />
      <Outlet />
    </Container>
  );
};

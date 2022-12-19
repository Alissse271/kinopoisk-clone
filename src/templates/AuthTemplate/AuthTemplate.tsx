import { Outlet } from "react-router-dom";
import { Container, TextRights } from "./styles";

export const AuthTemplate = () => {
  return (
    <Container>
      <Outlet />
      <TextRights>© All Rights Reserved</TextRights>
    </Container>
  );
};

import { NotFoundText, NotFoundNumber, Container } from "./styles";

export const NotFoundPage = () => {
  return (
    <Container>
      <NotFoundNumber>404</NotFoundNumber>
      <NotFoundText>Page Not Found</NotFoundText>
    </Container>
  );
};

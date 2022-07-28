import { Container, Title, Content } from "./style";

export const Card = ({ children, title }) => (
  <Container>
    <Title>{title}</Title>
    <Content>{children}</Content>
  </Container>
);

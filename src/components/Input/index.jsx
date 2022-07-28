import { Container, Label, InputField } from "./style";

export const Input = ({ label, ...props }) => (
  <Container>
    <Label>{label}</Label>
    <InputField {...props} />
  </Container>
);

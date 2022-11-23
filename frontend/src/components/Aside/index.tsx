import { AsideProps } from "../../types/Aside";
import { Container } from "./styles";

export function Aside(props: AsideProps) {
  return (
    <Container>
      {props.children}
    </Container>
  );
};
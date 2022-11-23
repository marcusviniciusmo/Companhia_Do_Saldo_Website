import { SectionProps } from "../../types/Section";
import { Container } from "./styles";

export function Section(props: SectionProps) {
  return (
    <Container>
      {props.children}
    </Container>
  );
};
import { InputProps } from "../../types/Input";
import { Container, Field, Label } from "./styles";

export function Input(props: InputProps) {
  return (
    <Container className={props.className}>
      <Field {...props} />

      <Label
        htmlFor={props.id}
        className={`${props.className} ${props.value && 'filled'}`}>
        {props.label}
      </Label>
    </Container>
  );
};
import { IoClose } from 'react-icons/io5';
import { InputProps } from "../../types/Input";
import { Container, Field, Label, Close } from "./styles";

export function Input(props: InputProps) {
  return (
    <Container className={props.className}>
      <Field {...props} />

      <Label
        htmlFor={props.id}
        className={`${props.className} ${props.value && 'filled'}`}>
        {props.label}
      </Label>

      {
        props.className === 'labelFloating' &&
        <Close
          title='Limpar'
          className={`${props.className} ${props.value && 'showClose'}`}
          onClick={props.clean && props.clean()}
        >
          <IoClose />
        </Close>
      }
    </Container>
  );
};
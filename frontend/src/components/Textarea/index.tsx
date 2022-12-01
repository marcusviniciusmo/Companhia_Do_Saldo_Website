import { IoClose } from "react-icons/io5";
import { TextareaProps } from "../../types/Textarea";
import { Container, Field, Label, Close } from "./styles";

export function Textarea(props: TextareaProps) {
  return (
    <Container>
      <Field {...props}
        cols={props.cols}
        rows={props.rows}
      />

      <Label className={props.value ? 'filled' : ''}>
        {props.label}
      </Label>

      <Close
        title="Limpar"
        className={`${props.className} ${props.value && 'showClose'}`}
        onClick={props.clean && props.clean()}
      >
        <IoClose />
      </Close>
    </Container>
  );
};
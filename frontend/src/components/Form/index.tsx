import { FormProps } from "../../types/Form";
import { Container, View } from "./styles";

export function Form(props: FormProps) {
  return (
    <Container>
      <h1>FORM Component</h1>

      <View>
        {props.children}
      </View>
    </Container>
  );
};
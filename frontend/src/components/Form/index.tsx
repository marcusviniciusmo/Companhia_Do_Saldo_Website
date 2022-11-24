import { FormProps } from "../../types/Form";

export function Form(props: FormProps) {
  return (
    <>
      <h1>FORM Component</h1>

      {props.children}
    </>
  );
};
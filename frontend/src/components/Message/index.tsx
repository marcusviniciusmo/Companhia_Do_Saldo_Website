import { Input } from "../Input";

export function Message() {
  return (
    <>
      <h1>MESSAGE Component</h1>

      <h3>Mensagem do Cliente</h3>
      <h4>Grau de Urgência:</h4>
      <Input />

      <h4>Mensagem:</h4>
      <Input />
    </>
  );
};
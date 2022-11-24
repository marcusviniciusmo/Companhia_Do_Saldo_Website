import { Input } from "../Input";

export function Identification() {
  return (
    <>
      <h1>IDENTIFICATION Component</h1>

      <h3>Identificação do Cliente</h3>
      <h4>Nome:</h4>
      <Input />

      <h4>E-mail:</h4>
      <Input />

      <h4>Sexo:</h4>
      <h4>Masculino</h4>
      <Input />
      <h4>Feminino</h4>
      <Input />
      <h4>Outro</h4>
      <Input />

      <h4>Data de Nascimento:</h4>
      <Input />
    </>
  );
};
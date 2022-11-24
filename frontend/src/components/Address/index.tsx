import { Input } from "../Input";
import { Select } from "../Select";

export function Address() {
  return (
    <>
      <h1>ADDRESS Component</h1>

      <h3>Endereço do Cliente</h3>
      <h4>Logradouro:</h4>
      <Input />

      <h4>Número:</h4>
      <Input />

      <h4>Estado:</h4>
      <Select />

      <h4>Cidade:</h4>
      <Select />
    </>
  );
};
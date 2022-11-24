import { Input } from "../Input";

export function Product() {
  return (
    <>
      <h1>PRODUCT Component</h1>

      <h3>Quero comprar</h3>
      <h4>Produto:</h4>
      <Input />

      <h4>Cor:</h4>
      <Input />
      
      <h4>Quantidade:</h4>
      <Input />
    </>
  );
};
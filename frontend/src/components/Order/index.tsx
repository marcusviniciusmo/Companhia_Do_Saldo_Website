import { Identification } from "../Identification";
import { Address } from "../Address";
import { Message } from "../Message";
import { Product } from "../Product";

export function Order() {
  return (
    <>
      <h1>ORDER Component</h1>

      <p>
        Gostaria de facilitar suas compras? Se cadastre, e com isso, você poderá
        fazer seus pedidos, sem sair de casa.
      </p>

      <h3>FORMULÁRIO</h3>
      <Identification />

      <Address />

      <Message />

      <Product />

      <h3>AQUI VAI UM BOTÃO</h3>
    </>
  );
};
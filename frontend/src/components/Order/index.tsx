import { Identification } from "../Identification";
import { Address } from "../Address";
import { Message } from "../Message";

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

      <h3>Quero comprar</h3>
      <h4>Produto:</h4>
      <h4>AQUI VAI UM CAMPO</h4>
      <h4>Cor:</h4>
      <h4>AQUI VAI UM CAMPO</h4>
      <h4>Quantidade:</h4>
      <h4>AQUI VAI UM CAMPO</h4>

      <h3>AQUI VAI UM BOTÃO</h3>
    </>
  );
};
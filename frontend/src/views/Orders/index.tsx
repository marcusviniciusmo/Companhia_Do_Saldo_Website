import { Header } from "../../components/Header";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Order } from "../../components/Order";
import { Footer } from "../../components/Footer";

export function Orders() {
  return (
    <>
      <h1>VIEW PEDIDOS</h1>
      <h1>Companhia do Saldo - Página Pedidos</h1>

      <Header />

      <h1>BODY</h1>
      <Breadcrumb
        path='Pedidos &gt; Formulário'
        title='Formulário de Cadastro'
      />

      <Order />

      <Footer />
    </>
  );
};
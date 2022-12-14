import { Header } from "../../components/Header";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Order } from "../../components/Order";
import { Footer } from "../../components/Footer";
import { Interface } from "../../styles/Interface";

export function Orders() {
  return (
    <Interface>
      <Header />

      <Breadcrumb
        path='Pedidos &gt; Formulário'
        title='Formulário de Cadastro'
      />

      <Order />

      <Footer />
    </Interface>
  );
};
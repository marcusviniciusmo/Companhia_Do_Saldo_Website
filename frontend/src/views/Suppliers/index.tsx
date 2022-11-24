import { Header } from "../../components/Header";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Supplier } from "../../components/Supplier";
import { Footer } from "../../components/Footer";

export function Suppliers() {
  return (
    <>
      <h1>VIEW FORNECEDORES</h1>
      <h1>Companhia do Saldo - Página Fornecedores</h1>

      <Header />

      <h1>BODY</h1>
      <Breadcrumb
        path='Fornecedores &gt; Equipe'
        title='Fornecedores'
      />

      <Supplier />

      <Footer />
    </>
  );
};
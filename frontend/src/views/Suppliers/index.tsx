import { Header } from "../../components/Header";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Supplier } from "../../components/Supplier";
import { Footer } from "../../components/Footer";
import { Interface } from "../../styles/Interface";

export function Suppliers() {
  return (
    <Interface>
      <Header />

      <Breadcrumb
        path='Fornecedores &gt; Equipe'
        title='Fornecedores'
      />

      <Supplier />

      <Footer />
    </Interface>
  );
};
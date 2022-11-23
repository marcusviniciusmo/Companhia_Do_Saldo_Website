import { Header } from "../../components/Header";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Gallery } from "../../components/Gallery";
import { Footer } from "../../components/Footer";

export function Products() {
  return (
    <>
      <h1>VIEW PRODUTOS</h1>
      <h1>Companhia do Saldo - Página Produtos</h1>

      <Header />

      <h1>BODY</h1>
      <Breadcrumb
        path='Produtos &gt; Galeria'
        title='Produtos'
      />

      <Gallery />

      <Footer />
    </>
  );
};
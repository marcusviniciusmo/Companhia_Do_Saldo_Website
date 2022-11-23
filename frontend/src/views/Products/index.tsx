import { Header } from "../../components/Header";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Gallery } from "../../components/Gallery";
import { Footer } from "../../components/Footer";
import { Interface } from "../../styles/Interface";

export function Products() {
  return (
    <Interface>
      <Header />

      <Breadcrumb
        path='Produtos &gt; Galeria'
        title='Produtos'
      />

      <Gallery />

      <Footer />
    </Interface>
  );
};
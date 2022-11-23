import { Header } from "../../components/Header";
import { Breadcrumb } from "../../components/Breadcrumb";
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

      <p>
        Veja nossa galeria de fotos, com várias imagens de estampas do que temos
        em estoque e até mesmo das novidades, tabela de cores de cada linha de
        produto, e conheça também, a nossa equipe. Tudo isto, basta apenas
        clicar na categoria abaixo desejada.
      </p>

      <h3>AQUI VAI UMA IMAGEM</h3>
      <h3>AQUI VAI UMA IMAGEM</h3>
      <h3>AQUI VAI UMA IMAGEM</h3>
      <h3>AQUI VAI UMA IMAGEM</h3>
      <h3>AQUI VAI UMA IMAGEM</h3>
      <h3>AQUI VAI UMA IMAGEM</h3>

      <Footer />
    </>
  );
};
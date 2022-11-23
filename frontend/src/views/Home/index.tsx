import { Header } from "../../components/Header";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Footer } from "../../components/Footer";

export function Home() {
  return (
    <>
      <h1>VIEW HOME</h1>
      <h1>Companhia do Saldo - Página Home</h1>

      <Header />

      <h1>BODY</h1>
      <Breadcrumb />
      <h3>Início &gt; Home</h3>

      <h2>A Empresa</h2>
      <p>
        A Companhia do Saldo, mais conhecida como Saldão, está há quase 8 anos
        no mercado. Uma loja de tecidos, especificamente de malhas, oferecendo
        serviços de qualidade, confiança e credibilidade.
      </p>

      <h3>AQUI VAI UMA IMAGEM</h3>
      <h3>Companhia do Saldo</h3>
      <p>Venha conhecer.</p>

      <h2>Localização</h2>
      <p>
        Rua 24 de Maio,
        Número: 872
        Centro, Fortaleza-CE
        Localizada entre a Rua Pedro Pereira e a Rua Pedro I.
      </p>
      <h3>AQUI VAI UM MAPA</h3>

      <h3>Novidades!</h3>
      <h1>Não perca essas novidades!!</h1>
      <h2>por Marcus Vinícius</h2>
      <h3>Atualizado em 21/Maio/2022</h3>
      <h3>AQUI VAI UMA IMAGEM</h3>

      <Footer />
    </>
  );
};
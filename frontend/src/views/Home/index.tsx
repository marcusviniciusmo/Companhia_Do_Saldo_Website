import { Header } from "../../components/Header";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Section } from "../../components/Section";
import { About } from "../../components/About";
import { Localization } from "../../components/Localization";
import { Aside } from "../../components/Aside";
import { Footer } from "../../components/Footer";
import { Interface } from "../../styles/Interface";

export function Home() {
  return (
    <Interface>
      <h1>VIEW HOME</h1>
      <h1>Companhia do Saldo - Página Home</h1>

      <Header />

      <h1>BODY</h1>
      <Breadcrumb
        path='Home &gt; Início'
      />

      <Section>
        <About />

        <Localization />
      </Section>

      <Aside>
        <h3>Novidades!</h3>
        <h1>Não perca essas novidades!!</h1>
        <h2>por Marcus Vinícius</h2>
        <h3>Atualizado em 21/Maio/2022</h3>
        <h3>AQUI VAI UMA IMAGEM</h3>
      </Aside>

      <Footer />
    </Interface>
  );
};
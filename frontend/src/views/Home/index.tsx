import { Header } from "../../components/Header";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Section } from "../../components/Section";
import { About } from "../../components/About";
import { Localization } from "../../components/Localization";
import { Aside } from "../../components/Aside";
import { News } from "../../components/News";
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
        <News />
      </Aside>

      <Footer />
    </Interface>
  );
};
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
      <Header />

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
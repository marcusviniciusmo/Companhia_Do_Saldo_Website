import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Section } from "../../components/Section";
import { About } from "../../components/About";
import { Localization } from "../../components/Localization";
import { Aside } from "../../components/Aside";
import { News } from "../../components/News";
import { Footer } from "../../components/Footer";
import { HomeProps } from "../../types/Home";
import { MockedData } from "../../mocks/Home";
import { Interface } from "../../styles/Interface";

export function Home() {
  const [mockedData, setMockedData] = useState<HomeProps>();

  useEffect(() => {
    setMockedData(MockedData);
  }, []);

  return (
    <Interface>
      <Header />

      <Breadcrumb path={mockedData?.breadcrumb.path!} />

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
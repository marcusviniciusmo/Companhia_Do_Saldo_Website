import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Footer } from "../../components/Footer";
import { ContactForm } from "../../components/ContactForm";
import { ContactProps } from "../../types/Contact";
import { MockedData } from "../../mocks/Contact";
import { Interface } from "../../styles/Interface";

export function Contact() {
  const [mockedData, setMockedData] = useState<ContactProps>();

  useEffect(() => {
    setMockedData(MockedData);
  }, []);

  return (
    <Interface>
      <Header icon={mockedData!?.icon} />

      <Breadcrumb
        path={mockedData!?.breadcrumb.path}
        title={mockedData?.breadcrumb.title}
      />

      <ContactForm />

      <Footer />
    </Interface>
  );
};
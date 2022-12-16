import { Header } from "../../components/Header";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Footer } from "../../components/Footer";
import { ContactForm } from "../../components/ContactForm";
import { Interface } from "../../styles/Interface";

export function Contact() {
  return (
    <Interface>
      <Header />

      <Breadcrumb
        path='Contato &gt; Fale Conosco'
        title='Sugestōes e Reclamaçōes'
      />

      <ContactForm />

      <Footer />
    </Interface>
  );
};
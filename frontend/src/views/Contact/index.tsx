import { Header } from "../../components/Header";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Footer } from "../../components/Footer";
import { ContactForm } from "../../components/ContactForm";

export function Contact() {
  return (
    <>
      <h1>VIEW CONTATO</h1>
      <h1>Companhia do Saldo - Página Contato</h1>

      <Header />

      <h1>BODY</h1>
      <Breadcrumb
        path='Contato &gt; Fale Conosco'
        title='Sugestōes e Reclamaçōes'
      />

      <ContactForm />

      <Footer />
    </>
  );
};
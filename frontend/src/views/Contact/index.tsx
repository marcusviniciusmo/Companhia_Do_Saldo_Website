import { Header } from "../../components/Header";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Footer } from "../../components/Footer";

export function Contact() {
  return (
    <>
      <h1>VIEW CONTATO</h1>
      <h1>Companhia do Saldo - Página Contato</h1>

      <Header />

      <h1>BODY</h1>
      <Breadcrumb />
      <h3>Fale Conosco &gt; Contato</h3>
      <h1>Sugestōes e Reclamaçōes</h1>

      <p>
        Ajude-nos a melhorar o nosso atendimento. Reclamaçōes, dúvidas, sugestōes,
        fale com a gente.
      </p>

      <h3>FORMULÁRIO</h3>
      <h4>Nome:</h4>
      <h4>AQUI VAI UM CAMPO</h4>
      <h4>Telefone:</h4>
      <h4>AQUI VAI UM CAMPO</h4>
      <h4>E-mail:</h4>
      <h4>AQUI VAI UM CAMPO</h4>
      <h4>Mensagem:</h4>
      <h4>AQUI VAI UM CAMPO</h4>

      <h3>AQUI VAI UM BOTÃO</h3>

      <Footer />
    </>
  );
};
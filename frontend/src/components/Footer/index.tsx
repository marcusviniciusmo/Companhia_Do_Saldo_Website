import { GetCurrentYear } from "../../utils/Functions";

export function Footer() {
  return (
    <>
      <h1>FOOTER Component</h1>
      <p>
        Copyright &copy; {GetCurrentYear()} Companhia do Saldo. Todos os direitos reservados.
        Facebook
        Instagram
        Home
        Contato
      </p>
    </>
  );
};
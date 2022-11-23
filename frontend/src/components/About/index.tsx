import Store from '../../assets/about/store.jpg';
import { GetAgeOfStore } from "../../utils/Functions";

export function About() {
  return (
    <>
      <h1>ABOUT Component</h1>
      
      <h2>A Empresa</h2>
      <p>
        A Companhia do Saldo, mais conhecida como Saldão, está há quase {
        GetAgeOfStore()} anos no mercado. Uma loja de tecidos, especificamente
        de malhas, oferecendo serviços de qualidade, confiança e credibilidade.
      </p>

      <img src={Store} alt="Companhia do Saldo" />
      <h3>Companhia do Saldo</h3>
      <p>Venha conhecer.</p>
    </>
  );
};
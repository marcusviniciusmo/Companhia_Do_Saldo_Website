import { Menu } from "../Menu";
import Logo from '../../assets/header/logo.png';

export function Header() {
  return (
    <>
      <h1>HEADER Component</h1>
      <h1>A melhor malha está aqui</h1>
      <h3>AQUI VAI UMA IMAGEM</h3>
      <img src={Logo} alt="Logo Companhia do Saldo" />
      
      <Menu />
    </>
  );
};
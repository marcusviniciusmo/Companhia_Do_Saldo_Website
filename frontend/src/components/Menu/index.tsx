import { Link } from 'react-router-dom';

export function Menu() {
  return (
    <>
      <h1>MENU Component</h1>
      <h1>Menu Principal</h1>

      <Link to='/'>
        <h4>Home</h4>
      </Link>

      <Link to='/products'>
        <h4>Produtos</h4>
      </Link>

      <Link to='/suppliers'>
        <h4>Fornecedores</h4>
      </Link>

      <Link to='/orders'>
        <h4>Pedidos</h4>
      </Link>

      <Link to='/contact'>
        <h4>Contato</h4>
      </Link>

    </>
  );
};
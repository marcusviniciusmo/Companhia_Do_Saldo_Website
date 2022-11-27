import { Input } from "../Input";

export function Product() {
  return (
    <>
      <h1>PRODUCT Component</h1>

      <form>
        <h3>Quero comprar</h3>
        <Input
          type='text'
          id='fieldProduct'
          className="labelFloating"
          label='Produto'
        />

        <Input
          type='text'
          id='fieldQuantity'
          className="labelFloating"
          label='Quantidade'
        />

        <Input
          type='color'
          id='fieldColor'
          label='Cor'
        />
      </form>
    </>
  );
};
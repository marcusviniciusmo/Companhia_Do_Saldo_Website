import { Input } from "../Input";
import { SetInput } from "../../utils/Functions";
import { useState } from "react";

export function Product() {
  const [inputProduct, setInputProduct] = useState<string>('');
  const [inputQuantity, setInputQuantity] = useState<string>('');
  const [inputColor, setInputColor] = useState<string>('#0033FF');

  const cleanInputProduct = () => setInputProduct('');
  const cleanInputQuantity = () => setInputQuantity('');

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
          value={inputProduct}
          onChange={() => SetInput(event, setInputProduct)}
          clean={() => cleanInputProduct}
        />

        <Input
          type='text'
          id='fieldQuantity'
          className="labelFloating"
          label='Quantidade'
          value={inputQuantity}
          onChange={() => SetInput(event, setInputQuantity)}
          clean={() => cleanInputQuantity}
        />

        <Input
          type='color'
          id='fieldColor'
          label='Cor'
          value={inputColor}
          onChange={() => SetInput(event, setInputColor)}
        />
      </form>
    </>
  );
};
import { useEffect, useState } from "react";
import { ColorApi } from "../../api";
import { Input } from "../Input";
import Icon from '../../assets/product/iconProduct.png';
import { ProductColorProps } from "../../types/Product";
import { SetInput } from "../../utils/Functions";
import { Container, Legend, FieldsetForm, InputRow } from "../../styles/Form";
import { ColorArea, Span, Color } from "./styles";

export function Product() {
  const [inputProduct, setInputProduct] = useState<string>('');
  const [inputQuantity, setInputQuantity] = useState<string>('');
  const [inputColor, setInputColor] = useState<string>('#0033FF');
  const [colorReference, setColorReference] = useState<ProductColorProps>();

  const cleanInputProduct = () => setInputProduct('');
  const cleanInputQuantity = () => setInputQuantity('');

  useEffect(() => {
    ColorApi.get(`id?hex=${inputColor.replace('#', '')}`)
      .then((response) => {
        setColorReference(response.data);
      })
  }, [inputColor]);

  return (

    <Container method='POST'>
      <FieldsetForm icon={Icon}>
        <Legend>Quero comprar</Legend>
        <InputRow>
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
        </InputRow>

        <ColorArea>
          <Input
            type='color'
            id='fieldColor'
            value={inputColor}
            onChange={() => SetInput(event, setInputColor)}
          />

          <Span>Cor escolhida:</Span>

          <Color src={colorReference?.image.bare} alt="Color" />
        </ColorArea>
      </FieldsetForm>
    </Container>
  );
};
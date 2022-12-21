import { useEffect, useState } from "react";
import { ColorApi } from "../../api";
import { BsCheck } from 'react-icons/bs';
import { Input } from "../Input";
import { ProductsList } from "../ProductsList";
import Icon from '../../assets/product/iconProduct.png';
import { ProductColorProps, ProductToListProps } from "../../types/Product";
import { SetInput } from "../../utils/Functions";
import { Container, Legend, FieldsetForm, InputRow } from "../../styles/Form";
import { ColorArea, Span, Color, ButtonAdd, List, CheckboxArea, Check, Indicator, Label } from "./styles";

export function Product() {
  const [inputProduct, setInputProduct] = useState<string>('');
  const [inputQuantity, setInputQuantity] = useState<string>('');
  const [inputColor, setInputColor] = useState<string>('#0033FF');
  const [colorReference, setColorReference] = useState<ProductColorProps>();
  const [productsList, setProductsList] = useState<ProductToListProps[]>([]);

  useEffect(() => {
    ColorApi.get(`id?hex=${inputColor.replace('#', '')}`)
      .then((response) => {
        setColorReference(response.data);
      })
  }, [inputColor]);

  const cleanInputProduct = () => setInputProduct('');

  const cleanInputQuantity = () => setInputQuantity('');

  const addProductToList = () => {
    let newProduct: ProductToListProps = {
      id: productsList.length + 1,
      product: inputProduct,
      quantity: inputQuantity,
      color: inputColor
    };

    setProductsList([...productsList, newProduct])
  };

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

          <>
            {
              inputProduct && inputQuantity &&
              <ButtonAdd
                type='button'
                title='Adicionar Produto'
                onClick={addProductToList}
              >
                +
              </ButtonAdd>
            }
          </>
        </ColorArea>

        <List>
          {
            productsList.length > 0 &&
            <ProductsList products={productsList} />
          }
        </List>

        <CheckboxArea>
          <Check id='fieldCheckbox'>
            <Indicator>
              <BsCheck />
            </Indicator>
          </Check>

          <Label htmlFor="fieldCheckbox">Li e concordo com os termos.</Label>
        </CheckboxArea>

      </FieldsetForm>
    </Container>
  );
};
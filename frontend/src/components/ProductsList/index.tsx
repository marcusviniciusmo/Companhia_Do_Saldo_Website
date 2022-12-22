import { BsTrash } from "react-icons/bs";
import { ProductsListProps } from "../../types/ProductsList";
import { Container, Row, Header, CellHeader, Body, CellData } from "./styles";

export function ProductsList(props: ProductsListProps) {
  const removeItemFromList = props.removeItem();

  return (
    <Container>
      <Header>
        <Row>
          <CellHeader>Produto</CellHeader>
          <CellHeader>Quantidade</CellHeader>
          <CellHeader>Color</CellHeader>
        </Row>
      </Header>

      <Body>
        {
          props.products.map((product) => {
            return (
              <Row key={product.id}>
                <CellData className="product">
                  {product.product}
                </CellData>
                <CellData className="quantity">
                  {product.quantity}
                </CellData>
                <CellData className="color">{product.color}</CellData>
                <CellData
                  className='action'
                  title="Retirar Item"
                  onClick={() => removeItemFromList(product.id)}
                >
                  <BsTrash />
                </CellData>
              </Row>
            )
          })
        }
      </Body>
    </Container>
  );
};
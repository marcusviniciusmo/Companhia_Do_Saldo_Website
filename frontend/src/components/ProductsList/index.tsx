import { ProductsListProps } from "../../types/ProductsList";
import { Container, Row, Header, CellHeader, Body, CellData } from "./styles";

export function ProductsList(props: ProductsListProps) {
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
                <CellData>{product.product}</CellData>
                <CellData>{product.quantity}</CellData>
                <CellData>{product.color}</CellData>
              </Row>
            )
          })
        }
      </Body>
    </Container>
  );
};
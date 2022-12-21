import { ProductsListProps } from "../../types/ProductsList";

export function ProductsList(props: ProductsListProps) {
  return (
    <>
      <h1>PRODUCTS LIST Component</h1>

      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Color</th>
          </tr>
        </thead>

        <tbody>
          {
            props.products.map((product) => {
              return (
                <tr key={product.id}>
                  <td>{product.product}</td>
                  <td>{product.quantity}</td>
                  <td>{product.color}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  );
};
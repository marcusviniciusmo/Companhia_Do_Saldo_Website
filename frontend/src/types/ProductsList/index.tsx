import { ProductToListProps } from "../Product"

export interface ProductsListProps {
  products: ProductToListProps[];
  removeItem: Function;
};
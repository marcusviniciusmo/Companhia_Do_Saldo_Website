import { SupplierCardProps } from "../../types/SupplierCard";

export function SupplierCard(props: SupplierCardProps) {
  return (
    <>
      <h1>SUPPLIER CARD Component</h1>

      <img src={props.image.url} alt={props.image.description} />

      <span>{props.title}</span>
      <span>{props.text}</span>

      <button>{}</button>
    </>
  );
};
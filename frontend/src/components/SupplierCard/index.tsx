import { useEffect, useState } from "react";
import { SupplierCardMocks, SupplierCardProps } from "../../types/SupplierCard";
import { MockedData } from "../../mocks/SupplierCard";

export function SupplierCard(props: SupplierCardProps) {
  const [mockedData, setMockedData] = useState<SupplierCardMocks>();

  useEffect(() => {
    setMockedData(MockedData);
  }, []);

  return (
    <>
      <h1>SUPPLIER CARD Component</h1>

      <img src={props.image.url} alt={props.image.description} />

      <span>{props.title}</span>
      <span>{props.text}</span>

      <button>{mockedData?.buttonText}</button>
    </>
  );
};
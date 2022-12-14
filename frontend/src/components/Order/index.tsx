import { Form } from "../Form";
import { OrderProps } from "../../types/Order";
import { MockedData } from "../../mocks/Order";
import { useEffect, useState } from "react";

export function Order() {
  const [mockedData, setMockedData] = useState<OrderProps>();

  useEffect(() => {
    setMockedData(MockedData)
  }, []);

  return (
    <>
      <h1>ORDER Component</h1>

      <p>{mockedData?.text}</p>

      <Form />
    </>
  );
};
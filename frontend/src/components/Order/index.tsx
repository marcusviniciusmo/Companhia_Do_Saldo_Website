import { useEffect, useState } from "react";
import { Form } from "../Form";
import { OrderProps } from "../../types/Order";
import { MockedData } from "../../mocks/Order";
import { ViewHeaderText } from "../../styles/ViewHeaderText";
import { Container } from "./styles";

export function Order() {
  const [mockedData, setMockedData] = useState<OrderProps>();

  useEffect(() => {
    setMockedData(MockedData)
  }, []);

  return (
    <Container>
      <ViewHeaderText>{mockedData?.text}</ViewHeaderText>

      <Form />
    </Container>
  );
};
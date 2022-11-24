import { useEffect, useState } from "react";
import { SupplierCard } from "../SupplierCard";
import { SupplierProps } from "../../types/Supplier";
import { MockedData } from "../../mocks/Supplier";
import { ViewHeaderText } from "../../styles/ViewHeaderText";
import { Container, Cards } from "./styles";

export function Supplier() {
  const [mockedData, setMockedData] = useState<SupplierProps>();

  useEffect(() => {
    setMockedData(MockedData);
  }, []);

  return (
    <Container>
      <ViewHeaderText>{mockedData?.text}</ViewHeaderText>

      <Cards>
        {
          mockedData?.suppliers.map((supplier) => {
            return (
              <SupplierCard
                key={supplier.id}
                id={supplier.id}
                image={supplier.image}
                title={supplier.title}
                text={supplier.text}
              />
            )
          })
        }
      </Cards>
    </Container>
  );
};
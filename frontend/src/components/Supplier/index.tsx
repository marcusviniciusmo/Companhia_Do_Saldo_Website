import { useEffect, useState } from "react";
import { SupplierCard } from "../SupplierCard";
import { SupplierProps } from "../../types/Supplier";
import { MockedData } from "../../mocks/Supplier";

export function Supplier() {
  const [mockedData, setMockedData] = useState<SupplierProps>();

  useEffect(() => {
    setMockedData(MockedData);
  }, []);

  return (
    <>
      <h1>SUPPLIER Component</h1>

      <p>{mockedData?.text}</p>

      <>
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
      </>
    </>
  );
};
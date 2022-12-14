import { Header } from "../../components/Header";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Supplier } from "../../components/Supplier";
import { Footer } from "../../components/Footer";
import { SuppliersProps } from "../../types/Suppliers";
import { MockedData } from "../../mocks/Suppliers";
import { Interface } from "../../styles/Interface";
import { useEffect, useState } from "react";

export function Suppliers() {
  const [mockedData, setMockedData] = useState<SuppliersProps>();

  useEffect(() => {
    setMockedData(MockedData);
  }, []);

  return (
    <Interface>
      <Header />

      <Breadcrumb
        path={mockedData?.breadcrumb.path!}
        title={mockedData?.breadcrumb.title}
      />

      <Supplier />

      <Footer />
    </Interface>
  );
};
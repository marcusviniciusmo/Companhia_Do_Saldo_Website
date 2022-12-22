import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Gallery } from "../../components/Gallery";
import { Footer } from "../../components/Footer";
import { ProductsProps } from "../../types/Products";
import { MockedData } from "../../mocks/Produtcs";
import { Interface } from "../../styles/Interface";

export function Products() {
  const [mockedData, setMockedData] = useState<ProductsProps>();

  useEffect(() => {
    setMockedData(MockedData)
  }, []);
  
  return (
    <Interface>
      <Header icon={mockedData!?.icon} />

      <Breadcrumb
        path={mockedData?.breadcrumb.path!}
        title={mockedData?.breadcrumb.title}
      />

      <Gallery />

      <Footer />
    </Interface>
  );
};
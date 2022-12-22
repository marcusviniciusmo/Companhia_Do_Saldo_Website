import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Order } from "../../components/Order";
import { Footer } from "../../components/Footer";
import { OrdersProps } from "../../types/Orders";
import { MockedData } from "../../mocks/Orders";
import { Interface } from "../../styles/Interface";

export function Orders() {
  const [mockedData, setMockedData] = useState<OrdersProps>();

  useEffect(() => {
    setMockedData(MockedData);
  }, []);

  return (
    <Interface>
      <Header icon={mockedData!?.icon} />

      <Breadcrumb
        path={mockedData?.breadcrumb.path!}
        title={mockedData?.breadcrumb.title}
      />

      <Order />

      <Footer />
    </Interface>
  );
};
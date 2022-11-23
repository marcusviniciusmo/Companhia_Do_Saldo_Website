import { useEffect, useState } from "react";
import { Menu } from "../Menu";
import { HeaderProps } from "../../types/Header";
import { MockedData } from "../../mocks/Header";

export function Header() {
  const [mockedData, setMockedData] = useState<HeaderProps>();

  useEffect(() => {
    setMockedData(MockedData);
  }, []);

  return (
    <>
      <h1>HEADER Component</h1>
      <h1>{mockedData?.title}</h1>
      <img src={mockedData?.image.url} alt={mockedData?.image.description} />
      
      <Menu />
    </>
  );
};
import { useEffect, useState } from "react";
import { Menu } from "../Menu";
import { HeaderProps } from "../../types/Header";
import { MockedData } from "../../mocks/Header";
import { Container, Title, Image } from "./styles";

export function Header() {
  const [mockedData, setMockedData] = useState<HeaderProps>();

  useEffect(() => {
    setMockedData(MockedData);
  }, []);

  return (
    <Container>
      <Title>{mockedData?.title}</Title>
      <Image src={mockedData?.image.url} alt={mockedData?.image.description} />
      
      <Menu />
    </Container>
  );
};
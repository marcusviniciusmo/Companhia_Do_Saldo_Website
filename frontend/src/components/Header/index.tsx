import { useEffect, useState } from "react";
import { Menu } from "../Menu";
import { HeaderProps } from "../../types/Header";
import { MockedData } from "../../mocks/Header";
import { Container, Title, Image, Icon } from "./styles";
import IconMenu from '../../assets/header/home.png';

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

      <Icon src={IconMenu} alt='' />
    </Container>
  );
};
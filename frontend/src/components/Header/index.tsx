import { useEffect, useState } from "react";
import { Menu } from "../Menu";
import { HeaderMocks, HeaderProps } from "../../types/Header";
import { MockedData } from "../../mocks/Header";
import { Container, Title, Image, Icon } from "./styles";

export function Header(props: HeaderProps) {
  const [mockedData, setMockedData] = useState<HeaderMocks>();

  useEffect(() => {
    setMockedData(MockedData);
  }, []);

  return (
    <Container>
      <Title>{mockedData?.title}</Title>
      <Image src={mockedData?.image.url} alt={mockedData?.image.description} />

      <Menu />

      <Icon src={props.icon?.url} alt={props.icon?.description} />
    </Container>
  );
};
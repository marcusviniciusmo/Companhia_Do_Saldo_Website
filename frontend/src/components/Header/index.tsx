import { useEffect, useState } from "react";
import { Menu } from "../Menu";
import { HeaderMocks, HeaderProps } from "../../types/Header";
import { MenuProps } from "../../types/Menu";
import { MockedData } from "../../mocks/Header";
import { Container, Title, Image, Icon } from "./styles";

export function Header(props: HeaderProps) {
  const [mockedData, setMockedData] = useState<HeaderMocks>();
  const [iconMenu, setIconMenu] = useState<string>();

  useEffect(() => {
    setMockedData(MockedData);
  }, []);

  const changeIconOnHover = (element: MenuProps) => {
    setIconMenu(element.icon);
  };

  const restoreIconOnHover = () => {
    setIconMenu(props.icon?.url);
  };

  return (
    <Container>
      <Title>{mockedData?.title}</Title>
      <Image src={mockedData?.image.url} alt={mockedData?.image.description} />

      <Menu
        onMouseEnter={() => changeIconOnHover}
        onMouseLeave={() => restoreIconOnHover}
      />

      <Icon src={iconMenu ? iconMenu : props.icon?.url} alt={props.icon?.description} />
    </Container>
  );
};
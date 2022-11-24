import { useEffect, useState } from "react";
import { SupplierCardMocks, SupplierCardProps } from "../../types/SupplierCard";
import { MockedData } from "../../mocks/SupplierCard";
import { Container, Top, Image, Bottom, Title, Text, Button } from "./styles";

export function SupplierCard(props: SupplierCardProps) {
  const [mockedData, setMockedData] = useState<SupplierCardMocks>();

  useEffect(() => {
    setMockedData(MockedData);
  }, []);

  return (
    <Container>
      <Top>
        <Image src={props.image.url} alt={props.image.description} />
      </Top>

      <Bottom>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>

        <Button>{mockedData?.buttonText}</Button>
      </Bottom>
    </Container>
  );
};
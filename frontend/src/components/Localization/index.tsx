import { useEffect, useState } from "react";
import { Map } from "../Map";
import { LocalizationProps } from "../../types/Localization";
import { MockedData } from "../../mocks/Localization";
import { Container, Paragraph, Title } from './styles';

export function Localization() {
  const [mockedData, setMockedData] = useState<LocalizationProps>();

  useEffect(() => {
    setMockedData(MockedData);
  }, []);

  return (
    <Container>
      <Title className='articleTitle'>{mockedData?.title}</Title>
      <Paragraph>{mockedData?.addressLine1}</Paragraph>
      <Paragraph>{mockedData?.addressLine2}</Paragraph>
      <Paragraph>{mockedData?.addressLine3}</Paragraph>
      <Paragraph><em>{mockedData?.reference}</em></Paragraph>
      

      <Map />
    </Container>
  );
};
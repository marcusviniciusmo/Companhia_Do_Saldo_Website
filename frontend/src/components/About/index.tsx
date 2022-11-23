import { useEffect, useState } from 'react';
import { AboutProps } from '../../types/About';
import { MockedData } from '../../mocks/About';
import { Container, Title, Text, Figure, Image, Figcaption } from './styles';

export function About() {
  const [mockedData, setMockedData] = useState<AboutProps>();

  useEffect(() => {
    setMockedData(MockedData)
  }, []);

  return (
    <Container>
      <Title className='articleTitle'>{mockedData?.title}</Title>
      <Text>{mockedData?.text}</Text>

      <Figure>
        <Image
          src={mockedData?.image.url}
          alt={mockedData?.image.description}
        />

        <Figcaption>
          <Title>{mockedData?.figcaptionTitle}</Title>
          <Text>{mockedData?.figcaptionText}</Text>
        </Figcaption>
      </Figure>
    </Container>
  );
};
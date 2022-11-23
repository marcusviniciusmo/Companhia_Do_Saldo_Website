import { useEffect, useState } from 'react';
import { Container, Header, HGroup, Title, Subtitle, Text, Items, Image, Row, Date, TitleItem } from './styles';
import { NewsProps } from '../../types/News';
import { MockedData } from '../../mocks/News';

export function News() {
  const [mockedData, setMockedData] = useState<NewsProps>();

  useEffect(() => {
    setMockedData(MockedData);
  }, []);

  return (
    <Container>
      <Header>
        <HGroup>
          <Text>{mockedData?.text1}</Text>
          <Title>{mockedData?.title}</Title>
          <Subtitle>{mockedData?.subtitle}</Subtitle>
          <Text right>{mockedData?.text2}</Text>
        </HGroup>
      </Header>

      <>
        {
          mockedData?.items.map((item) => {
            return (
              <Items key={item.id}>
                <Image src={item.image.url} alt={item.image.description} />

                <Row>
                  <Date>{item.date}</Date>
                  <TitleItem>{item.title}</TitleItem>
                </Row>
              </Items>
            )
          })
        }
      </>
    </Container>
  );
};
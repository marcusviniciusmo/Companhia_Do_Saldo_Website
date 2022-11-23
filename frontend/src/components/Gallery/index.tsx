import { useEffect, useState } from "react";
import { GalleryProps } from "../../types/Gallery";
import { MockedData } from "../../mocks/Gallery";
import { ViewHeaderText } from "../../styles/ViewHeaderText";
import { Container, List, Link, Item, Text } from './styles';

export function Gallery() {
  const [mockedData, setMockedData] = useState<GalleryProps>();

  useEffect(() => {
    setMockedData(MockedData)
  }, []);

  return (
    <Container>
      <ViewHeaderText>{mockedData?.text}</ViewHeaderText>

      <List>
        {
          mockedData?.images.map((image) => {
            return (
              <Link href="#" key={image.id}>
                <Item id={image.id}>
                  <Text>{image.span}</Text>
                </Item>
              </Link>
            )
          })
        }
      </List>
    </Container>
  );
};
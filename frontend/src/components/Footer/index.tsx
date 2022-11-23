import { useEffect, useState } from 'react';
import { FooterProps } from '../../types/Footer';
import { MockedData } from '../../mocks/Footer';
import { Container, Text, Icons, Icon } from './styles';

export function Footer() {
  const [mockedData, setMockedData] = useState<FooterProps>();

  useEffect(() => {
    setMockedData(MockedData);
  }, []);

  return (
    <Container>
      <Text>{mockedData?.text}</Text>

      <Icons>
        {
          mockedData?.icons.map((icon) => {
            return (
              <Icon
                key={icon.id}
                href={icon.url}
                title={icon.title}
                target={icon.target}
              >
                <icon.icon color={icon.color} />
              </Icon>
            )
          })
        }
      </Icons>
    </Container>
  );
};
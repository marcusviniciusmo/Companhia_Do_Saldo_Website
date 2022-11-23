import { useEffect, useState } from 'react';
import { FooterProps } from '../../types/Footer';
import { MockedData } from '../../mocks/Footer';

export function Footer() {
  const [mockedData, setMockedData] = useState<FooterProps>();

  useEffect(() => {
    setMockedData(MockedData);
  }, []);

  return (
    <>
      <h1>FOOTER Component</h1>
      <p>
        {mockedData?.text}

        <>
          {
            mockedData?.icons.map((icon) => {
              return (
                <a href={icon.url} key={icon.id} target={icon.target}>
                  <icon.icon />
                </a>
              )
            })
          }
        </>
      </p>
    </>
  );
};
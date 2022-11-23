import { useEffect, useState } from 'react';
import { AboutProps } from '../../types/About';
import { MockedData } from '../../mocks/About';

export function About() {
  const [mockedData, setMockedData] = useState<AboutProps>();

  useEffect(() => {
    setMockedData(MockedData)
  }, []);

  return (
    <>
      <h1>ABOUT Component</h1>

      <h2>{mockedData?.title}</h2>
      <p>{mockedData?.text}</p>

      <img
        src={mockedData?.image.url}
        alt={mockedData?.image.description}
      />
      <h3>{mockedData?.figcaptionTitle}</h3>
      <p>{mockedData?.figcaptionText}</p>
    </>
  );
};
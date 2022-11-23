import { useEffect, useState } from "react";
import { MapProps } from "../../types/Map";
import { MockedData } from "../../mocks/Map";
import { Iframe } from './styles';

export function Map() {
  const [mockedData, setMockedData] = useState<MapProps>();

  useEffect(() => {
    setMockedData(MockedData);
  }, []);

  return (
    <Iframe
      title={mockedData?.title}
      src={mockedData?.url}
      allowFullScreen={mockedData?.allowFullScreen}
    />
  );
};
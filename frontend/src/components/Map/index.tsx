import { useEffect, useState } from "react";
import { MapProps } from "../../types/Map";
import { MockedData } from "../../mocks/Map";

export function Map() {
  const [mockedData, setMockedData] = useState<MapProps>();
  
  useEffect(() => {
    setMockedData(MockedData);
  }, []);

  return (
    <>
      <h1>MAP Component</h1>

      <iframe
        title={mockedData?.title}
        src={mockedData?.url}
        allowFullScreen={mockedData?.allowFullScreen}
        width={600}
        height={450}
      />
    </>
  );
};
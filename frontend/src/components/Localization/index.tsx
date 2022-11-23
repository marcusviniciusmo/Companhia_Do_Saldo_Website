import { useEffect, useState } from "react";
import { Map } from "../Map";
import { LocalizationProps } from "../../types/Localization";
import { MockedData } from "../../mocks/Localization";

export function Localization() {
  const [mockedData, setMockedData] = useState<LocalizationProps>();

  useEffect(() => {
    setMockedData(MockedData);
  }, []);

  return (
    <>
      <h1>LOCALIZATION Component</h1>

      <h2>{mockedData?.title}</h2>
      <p>
        {mockedData?.addressLine1}
        {mockedData?.addressLine2}
        {mockedData?.addressLine3}
        {mockedData?.reference}
      </p>

      <Map />
    </>
  );
};
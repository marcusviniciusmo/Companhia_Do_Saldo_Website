import { useEffect, useState } from "react";
import { ProgressBar } from "../ProgressBar";
import { FormProps } from "../../types/Form";
import { MockedData } from "../../mocks/Form";
import { Container, View } from "./styles";

export function Form() {
  const [mockedData, setMockedData] = useState<FormProps>();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setMockedData(MockedData)
  }, []);

  return (
    <Container>
      <h1>FORM Component</h1>

      <ProgressBar />

      <View src={mockedData?.content[index]} />
    </Container>
  );
};
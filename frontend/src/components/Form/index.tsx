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

  const prevForm = () => {
    if (index > 0)
      setIndex(index - 1);
  };

  const nextForm = () => {
    if (index + 1 < mockedData?.content!?.length)
      setIndex(index + 1);
  };

  return (
    <Container>
      <h1>FORM Component</h1>

      <ProgressBar />

      <View src={mockedData?.content[index]} />

      <button onClick={prevForm}>Voltar</button>
      <button onClick={nextForm}>Avançar</button>
    </Container>
  );
};
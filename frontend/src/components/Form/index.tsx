import { useEffect, useState } from "react";
import { ProgressBar } from "../ProgressBar";
import { FormProps } from "../../types/Form";
import { MockedData } from "../../mocks/Form";
import { Container, View, Bottom, Button } from "./styles";

export function Form() {
  const [mockedData, setMockedData] = useState<FormProps>();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setMockedData(MockedData);
    setId(index);
  }, []);

  useEffect(() => {
    setId(index);
  }, [index]);

  const setId = (indexPage: number) => {
    setMockedData(mock => ({
      ...mock!,
      activeId: indexPage + 1
    }));
  };

  const handleForm = (id: string) => {
    if (id === 'prev') {
      index > 0 && setIndex(index - 1);
    } else {
      index + 1 < mockedData?.content!?.length && setIndex(index + 1);
    };
  };

  return (
    <Container>
      <h1>FORM Component</h1>

      <ProgressBar content={mockedData!} />

      <View src={mockedData?.content[index].url} />

      <Bottom>
        {
          index > 0 &&
          <Button id='prev' onClick={() => handleForm('prev')}>Voltar</Button>
        }
        {
          index + 1 < mockedData?.content!?.length &&
          <Button id='next' onClick={() => handleForm('next')}>Avançar</Button>
        }
      </Bottom>
    </Container>
  );
};
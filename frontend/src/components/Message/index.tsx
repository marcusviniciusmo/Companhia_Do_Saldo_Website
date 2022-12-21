import { useEffect, useState } from "react";
import { Input } from "../Input";
import { Textarea } from "../Textarea";
import { MessageProps } from "../../types/Message";
import { MockedData } from "../../mocks/Message";
import { SetInput } from "../../utils/Functions";
import { Container, Legend, FieldsetForm } from "../../styles/Form";
import { MessageArea, Urgency, Span } from "./styles";

export function Message() {
  const [mockedData, setMockedData] = useState<MessageProps>();
  const [inputUrgency, setInputUrgency] = useState<string>('');
  const [inputMessage, setInputMessage] = useState<string>('');

  useEffect(() => {
    setMockedData(MockedData);
  }, []);

  const cleanInputMessage = () => setInputMessage('');

  return (
    <Container method='POST'>
      <FieldsetForm icon={mockedData!?.icon}>
        <Legend>{mockedData?.legend}</Legend>

        <MessageArea>
          <Urgency>
            <Span>{mockedData?.spans[0]}</Span>
            <Input
              type={mockedData?.inputs[0].type}
              id={mockedData?.inputs[0].id}
              className={mockedData?.inputs[0].className}
              label={mockedData?.inputs[0].label}
              min={mockedData?.inputs[0].min}
              max={mockedData?.inputs[0].max}
              step={mockedData?.inputs[0].step}
              value={inputUrgency}
              onChange={() => SetInput(event, setInputUrgency)}
            />
            <Span>{mockedData?.spans[1]}</Span>
          </Urgency>

          <Textarea
            label={mockedData!?.textarea.label}
            className={mockedData?.textarea.className}
            value={inputMessage}
            onChange={() => SetInput(event, setInputMessage)}
            clean={() => cleanInputMessage}
          />
        </MessageArea>
      </FieldsetForm>
    </Container>
  );
};
import { useEffect, useState } from "react";
import { Input } from "../Input";
import { Textarea } from "../Textarea";
import { SetInput } from "../../utils/Functions";
import { ContactFormProps } from "../../types/ContactForm";
import { MockedData } from "../../mocks/ContactForm";
import { Container as Form, FieldsetForm, Legend, InputRow, Button } from "../../styles/Form";
import { ViewHeaderText } from "../../styles/ViewHeaderText";
import { Container } from "./styles";

export function ContactForm() {
  const [mockedData, setMockedData] = useState<ContactFormProps>();
  const [inputName, setInputName] = useState<string>('');
  const [inputPhone, setInputPhone] = useState<string>('');
  const [inputEmail, setInputEmail] = useState<string>('');
  const [inputMessage, setInputMessage] = useState<string>('');

  useEffect(() => {
    setMockedData(MockedData);
  }, []);

  const cleanInputName = () => setInputName('');

  const cleanInputPhone = () => setInputPhone('');

  const cleanInputEmail = () => setInputEmail('');

  const cleanInputMessage = () => setInputMessage('');

  return (
    <Container>
      <ViewHeaderText>{mockedData?.text}</ViewHeaderText>

      <Form>
        <FieldsetForm icon={mockedData!?.icon}>
          <Legend>Sugestões ou Reclamaçōes</Legend>
          <InputRow>
            <Input
              type={mockedData?.inputs[0].type}
              id={mockedData?.inputs[0].id}
              className={mockedData?.inputs[0].className}
              label={mockedData?.inputs[0].label}
              value={inputName}
              onChange={() => SetInput(event, setInputName)}
              clean={() => cleanInputName}
            />

            <Input
              type={mockedData?.inputs[1].type}
              id={mockedData?.inputs[1].id}
              className={mockedData?.inputs[1].className}
              label={mockedData?.inputs[1].label}
              value={inputPhone}
              onChange={() => SetInput(event, setInputPhone)}
              clean={() => cleanInputPhone}
            />
          </InputRow>

          <Input
            type={mockedData?.inputs[2].type}
            id={mockedData?.inputs[2].id}
            className={mockedData?.inputs[2].className}
            label={mockedData?.inputs[2].label}
            value={inputEmail}
            onChange={() => SetInput(event, setInputEmail)}
            clean={() => cleanInputEmail}
          />

          <Textarea
            id={mockedData?.inputs[3].id}
            className={mockedData?.inputs[3].className}
            label={mockedData?.inputs[3].label!}
            value={inputMessage}
            onChange={() => SetInput(event, setInputMessage)}
            clean={() => cleanInputMessage}
          />

        </FieldsetForm>

        <Button>{mockedData?.labelSubmitButton}</Button>
      </Form>
    </Container>
  );
};
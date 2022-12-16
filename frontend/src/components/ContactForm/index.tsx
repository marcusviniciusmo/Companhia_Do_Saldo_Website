import { useState } from "react";
import { Input } from "../Input";
import { Textarea } from "../Textarea";
import Icon from '../../assets/contact/icon.png';
import { SetInput } from "../../utils/Functions";
import { Container as Form, FieldsetForm, Legend, InputRow, Button } from "../../styles/Form";
import { ViewHeaderText } from "../../styles/ViewHeaderText";
import { Container } from "./styles";

export function ContactForm() {
  const [inputName, setInputName] = useState<string>('');
  const [inputPhone, setInputPhone] = useState<string>('');
  const [inputEmail, setInputEmail] = useState<string>('');
  const [inputMessage, setInputMessage] = useState<string>('');

  const cleanInputName = () => setInputName('');

  const cleanInputPhone = () => setInputPhone('');

  const cleanInputEmail = () => setInputEmail('');

  const cleanInputMessage = () => setInputMessage('');

  return (
    <Container>
      <ViewHeaderText>
        Ajude-nos a melhorar o nosso atendimento. Reclamaçōes, dúvidas, sugestōes,
        fale com a gente.
      </ViewHeaderText>

      <Form>
        <FieldsetForm icon={Icon}>
          <Legend>Sugestões ou Reclamaçōes</Legend>
          <InputRow>
            <Input
              type='text'
              id='fieldNameContact'
              className='labelFloating'
              label='Nome'
              value={inputName}
              onChange={() => SetInput(event, setInputName)}
              clean={() => cleanInputName}
            />

            <Input
              type='text'
              id='fieldPhoneContact'
              className='labelFloating'
              label='Celular'
              value={inputPhone}
              onChange={() => SetInput(event, setInputPhone)}
              clean={() => cleanInputPhone}
            />
          </InputRow>

          <Input
            type='email'
            id='fieldEmailContact'
            className='labelFloating'
            label='E-mail'
            value={inputEmail}
            onChange={() => SetInput(event, setInputEmail)}
            clean={() => cleanInputEmail}
          />

          <Textarea
            id='fieldMessageContact'
            className='labelFloating'
            label='Mensagem'
            value={inputMessage}
            onChange={() => SetInput(event, setInputMessage)}
            clean={() => cleanInputMessage}
          />

        </FieldsetForm>

        <Button>Enviar</Button>
      </Form>
    </Container>
  );
};
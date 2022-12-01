import { useState } from "react";
import { Input } from "../Input";
import { Textarea } from "../Textarea";
import Icon from '../../assets/message/iconMessage.png';
import { SetInput } from "../../utils/Functions";
import { Container, Legend, FieldsetForm } from "../../styles/Form";
import { MessageArea, Urgency, Span } from "./styles";

export function Message() {
  const [inputUrgency, setInputUrgency] = useState<string>('');
  const [inputMessage, setInputMessage] = useState<string>('');

  const cleanInputMessage = () => setInputMessage('');

  return (
    <Container method='POST'>
      <FieldsetForm icon={Icon}>
        <Legend>Mensagem do Cliente</Legend>

        <MessageArea>
          <Urgency>
            <Span>Min</Span>
            <Input
              type='range'
              id='fieldUrgency'
              className='inputRange'
              label='Grau de Urgência'
              min={0}
              max={10}
              step={2}
              value={inputUrgency}
              onChange={() => SetInput(event, setInputUrgency)}
            />
            <Span>Máx</Span>
          </Urgency>

          <Textarea
            label='Mensagem'
            className='labelFloating'
            cols={30}
            rows={10}
            value={inputMessage}
            onChange={() => SetInput(event, setInputMessage)}
            clean={() => cleanInputMessage}
          />
        </MessageArea>
      </FieldsetForm>
    </Container>
  );
};
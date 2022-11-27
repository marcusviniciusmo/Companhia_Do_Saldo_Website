import { useState } from "react";
import { Input } from "../Input";
import { Textarea } from "../Textarea";
import { SetInput } from "../../utils/Functions";

export function Message() {
  const [inputUrgency, setInputUrgency] = useState<string>('');

  return (
    <>
      <h1>MESSAGE Component</h1>

      <form>
        <h3>Mensagem do Cliente</h3>
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

        <h4>Mensagem:</h4>
        <Textarea />
      </form>
    </>
  );
};
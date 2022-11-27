import { Input } from "../Input";
import { Textarea } from "../Textarea";

export function Message() {
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
        />

        <h4>Mensagem:</h4>
        <Textarea />
      </form>
    </>
  );
};
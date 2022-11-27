import { useState } from "react";
import { Input } from "../Input";
import { SetInput } from "../../utils/Functions";

export function Identification() {
  const [inputCpf, setInputCpf] = useState<string>('');
  const [inputPhone, setInputPhone] = useState<string>('');
  const [inputName, setInputName] = useState<string>('');
  const [inputEmail, setInputEmail] = useState<string>('');
  const [, setInputGender] = useState<string>('');
  const [inputBirthday, setInputBirthday] = useState<string>();

  return (
    <>
      <h1>IDENTIFICATION Component</h1>

      <form>
        <h3>Identificação do Cliente</h3>
        <Input
          type='text'
          id='fieldCpf'
          className="labelFloating"
          label='CPF'
          value={inputCpf}
          onChange={() => SetInput(event, setInputCpf)}
        />

        <Input
          type='text'
          id='fieldPhone'
          className="labelFloating"
          label='Celular'
          value={inputPhone}
          onChange={() => SetInput(event, setInputPhone)}
        />

        <Input
          type='text'
          id='fieldName'
          className="labelFloating"
          label='Nome'
          value={inputName}
          onChange={() => SetInput(event, setInputName)}
        />

        <Input
          type='email'
          id='fieldEmail'
          className="labelFloating"
          label='E-mail'
          value={inputEmail}
          onChange={() => SetInput(event, setInputEmail)}
        />

        <h4>Sexo:</h4>
        <Input
          type='radio'
          id='fieldGenderMale'
          name='fieldGender'
          className='inputRadio'
          label='Masculino'
          value='Masculino'
          onChange={() => SetInput(event, setInputGender)}
        />

        <Input
          type='radio'
          id='fieldGenderFemale'
          name='fieldGender'
          className='inputRadio'
          label='Feminino'
          value='Feminino'
          onChange={() => SetInput(event, setInputGender)}
        />

        <Input
          type='radio'
          id='fieldGenderOther'
          name='fieldGender'
          className='inputRadio'
          label='Outro'
          value='Outro'
          onChange={() => SetInput(event, setInputGender)}
        />

        <Input
          type='text'
          id='fieldBirthday'
          className="labelFloating"
          label='Data de Nascimento'
          value={inputBirthday}
          onChange={() => SetInput(event, setInputBirthday)}
        />
      </form>
    </>
  );
};
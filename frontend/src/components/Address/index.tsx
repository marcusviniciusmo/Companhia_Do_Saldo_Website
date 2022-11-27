import { useState } from "react";
import { Input } from "../Input";
import { Select } from "../Select";
import { SetInput } from "../../utils/Functions";

export function Address() {
  const [inputCep, setInputCep] = useState<string>('');
  const [inputAddress, setInputAddress] = useState<string>('');
  const [inputNumber, setInputNumber] = useState<string>('');
  const [inputComplement, setInputComplement] = useState<string>('');
  const [inputDistrict, setInputDistrict] = useState<string>('');

  return (
    <>
      <h1>ADDRESS Component</h1>

      <form>
        <h3>Endereço do Cliente</h3>
        <Input
          type='text'
          id='fieldCep'
          className="labelFloating"
          label='CEP'
          value={inputCep}
          onChange={() => SetInput(event, setInputCep)}
        />

        <Input
          type='text'
          id='fieldAddress'
          className="labelFloating"
          label='Endereço'
          value={inputAddress}
          onChange={() => SetInput(event, setInputAddress)}
        />

        <Input
          type='text'
          id='fieldNumber'
          className="labelFloating"
          label='Número'
          value={inputNumber}
          onChange={() => SetInput(event, setInputNumber)}
        />

        <Input
          type='text'
          id='fieldComplement'
          className="labelFloating"
          label='Complemento'
          value={inputComplement}
          onChange={() => SetInput(event, setInputComplement)}
        />

        <Input
          type='text'
          id='fieldDistrict'
          className="labelFloating"
          label='Bairro'
          value={inputDistrict}
          onChange={() => SetInput(event, setInputDistrict)}
        />

        <h4>Estado:</h4>
        <Select />

        <h4>Cidade:</h4>
        <Select />
      </form>
    </>
  );
};
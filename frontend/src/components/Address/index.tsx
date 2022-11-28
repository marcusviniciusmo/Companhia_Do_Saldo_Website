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

  const cleanInputCep = () => setInputCep('');
  
  const cleanInputAddress = () => setInputAddress('');
  
  const cleanInputNumber = () => setInputNumber('');
  
  const cleanInputComplement = () => setInputComplement('');
  
  const cleanInputDistrict = () => setInputDistrict('');
  

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
          clean={() => cleanInputCep}
        />

        <Input
          type='text'
          id='fieldAddress'
          className="labelFloating"
          label='Endereço'
          value={inputAddress}
          onChange={() => SetInput(event, setInputAddress)}
          clean={() => cleanInputAddress}
        />

        <Input
          type='text'
          id='fieldNumber'
          className="labelFloating"
          label='Número'
          value={inputNumber}
          onChange={() => SetInput(event, setInputNumber)}
          clean={() => cleanInputNumber}
        />

        <Input
          type='text'
          id='fieldComplement'
          className="labelFloating"
          label='Complemento'
          value={inputComplement}
          onChange={() => SetInput(event, setInputComplement)}
          clean={() => cleanInputComplement}
        />

        <Input
          type='text'
          id='fieldDistrict'
          className="labelFloating"
          label='Bairro'
          value={inputDistrict}
          onChange={() => SetInput(event, setInputDistrict)}
          clean={() => cleanInputDistrict}
        />

        <h4>Estado:</h4>
        <Select />

        <h4>Cidade:</h4>
        <Select />
      </form>
    </>
  );
};
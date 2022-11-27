import { Input } from "../Input";
import { Select } from "../Select";

export function Address() {
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
        />

        <Input
          type='text'
          id='fieldAddress'
          className="labelFloating"
          label='Endereço'
        />

        <Input
          type='text'
          id='fieldNumber'
          className="labelFloating"
          label='Número'
        />

        <Input
          type='text'
          id='fieldComplement'
          className="labelFloating"
          label='Complemento'
        />

        <Input
          type='text'
          id='fieldDistrict'
          className="labelFloating"
          label='Bairro'
        />

        <h4>Estado:</h4>
        <Select />

        <h4>Cidade:</h4>
        <Select />
      </form>
    </>
  );
};
import { Input } from "../Input";

export function Identification() {
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
        />

        <Input
          type='text'
          id='fieldPhone'
          className="labelFloating"
          label='Celular'
        />

        <Input
          type='text'
          id='fieldName'
          className="labelFloating"
          label='Nome'
        />

        <Input
          type='email'
          id='fieldEmail'
          className="labelFloating"
          label='E-mail'
        />

        <h4>Sexo:</h4>
        <Input
          type='radio'
          id='fieldGenderMale'
          name='fieldGender'
          className='inputRadio'
          label='Masculino'
        />

        <Input
          type='radio'
          id='fieldGenderFemale'
          name='fieldGender'
          className='inputRadio'
          label='Feminino'
        />

        <Input
          type='radio'
          id='fieldGenderOther'
          name='fieldGender'
          className='inputRadio'
          label='Outro'
        />

        <Input
          type='text'
          id='fieldBirthday'
          className="labelFloating"
          label='Data de Nascimento'
        />
      </form>
    </>
  );
};
import { IdentificationProps } from "../../types/Identification";

export const MockedData: IdentificationProps = {
  legend: 'Identificação do Cliente',
  subLegend: ['Sexo:'],
  inputs: [
    {
      type: 'text',
      id: 'fieldCpf',
      className: 'labelFloating',
      label: 'CPF'
    },
    {
      type: 'text',
      id: 'fieldPhone',
      className: 'labelFloating',
      label: 'Celular'
    },
    {
      type: 'text',
      id: 'fieldName',
      className: 'labelFloating',
      label: 'Nome'
    },
    {
      type: 'email',
      id: 'fieldEmail',
      className: 'labelFloating',
      label: 'E-mail'
    },
    {
      type: 'radio',
      id: 'fieldGenderMale',
      name: 'fieldGender',
      className: 'inputRadio',
      label: 'Masculino',
      value: 'Masculino'
    },
    {
      type: 'radio',
      id: 'fieldGenderFemale',
      name: 'fieldGender',
      className: 'inputRadio',
      label: 'Feminino',
      value: 'Feminino'
    },
    {
      type: 'radio',
      id: 'fieldGenderOther',
      name: 'fieldGender',
      className: 'inputRadio',
      label: 'Outro',
      value: 'Outro'
    },
    {
      type: 'text',
      id: 'fieldBirthday',
      className: 'labelFloating',
      label: 'Data de Nascimento'
    },
  ]
};
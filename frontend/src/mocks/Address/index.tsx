import { AddressProps } from "../../types/Address";
import Icon from '../../assets/address/iconAddress.png';

export const MockedData: AddressProps = {
  icon: Icon,
  legend: 'Endereço do Cliente',
  inputs: [
    {
      type: 'text',
      id: 'fieldCep',
      className: 'labelFloating',
      label: 'CEP',
      maxLength: 8
    },
    {
      type: 'text',
      id: 'fieldAddress',
      className: 'labelFloating',
      label: 'Endereço',
      maxLength: 100
    },
    {
      type: 'text',
      id: 'fieldNumber',
      className: 'labelFloating',
      label: 'Número'
    },
    {
      type: 'text',
      id: 'fieldComplement',
      className: 'labelFloating',
      label: 'Complemento'
    },
    {
      type: 'text',
      id: 'fieldDistrict',
      className: 'labelFloating',
      label: 'Bairro'
    }
  ],
  selects: [
    {
      label: 'Estado'
    },
    {
      label: 'Cidade'
    }
  ]
};
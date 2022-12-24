import { SearchCepMocks } from "../../types/SearchCep";

export const MockedData: SearchCepMocks = {
  title: 'Buscar CEP',
  closeTitle: 'Fechar',
  selects: [
    {
      label: 'Estado'
    },
    {
      label: 'Cidade'
    }
  ],
  inputs: [
    {
      type: 'text',
      id: 'fieldAddressModal',
      className: 'labelFloating',
      label: 'Endereço',
      maxLength: 100
    }
  ],
  buttonCancelLabel: 'Cancelar',
  buttonSearchLabel: 'Bucar'
};
import { BiUser, BiHomeCircle, BiMessage, BiCart } from 'react-icons/bi';
import { FormProps } from "../../types/Form";

const baseUrl = '/orders/';

export const MockedData: FormProps = {
  activeId: 1,
  content: [
    {
      id: 1,
      url: `${baseUrl}identification`,
      title: 'Identificação',
      icon: BiUser
    },
    {
      id: 2,
      url: `${baseUrl}address`,
      title: 'Endereço',
      icon: BiHomeCircle,
    },
    {
      id: 3,
      url: `${baseUrl}message`,
      title: 'Mensagem',
      icon: BiMessage
    },
    {
      id: 4,
      url: `${baseUrl}product`,
      title: 'Produto',
      icon: BiCart
    }
  ]
};
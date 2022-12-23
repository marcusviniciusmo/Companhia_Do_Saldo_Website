import { BiUser, BiHomeCircle, BiMessage, BiCart } from 'react-icons/bi';
import { FormProps } from "../../types/Form";
import { Identification } from '../../components/Identification';
import { Address } from '../../components/Address';
import { Message } from '../../components/Message';
import { Product } from '../../components/Product';

const baseUrl = '/orders/';

export const MockedData: FormProps = {
  activeId: 1,
  content: [
    {
      id: 1,
      url: `${baseUrl}identification`,
      children: <Identification />,
      title: 'Identificação',
      icon: BiUser
    },
    {
      id: 2,
      url: `${baseUrl}address`,
      children: <Address />,
      title: 'Endereço',
      icon: BiHomeCircle,
    },
    {
      id: 3,
      url: `${baseUrl}message`,
      children: <Message />,
      title: 'Mensagem',
      icon: BiMessage
    },
    {
      id: 4,
      url: `${baseUrl}product`,
      children: <Product />,
      title: 'Produto',
      icon: BiCart
    }
  ]
};
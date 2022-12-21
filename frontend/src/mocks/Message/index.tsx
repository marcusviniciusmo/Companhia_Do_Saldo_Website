import { MessageProps } from "../../types/Message";
import Icon from '../../assets/message/iconMessage.png';

export const MockedData: MessageProps = {
  icon: Icon,
  legend: 'Mensagem do Cliente',
  spans: ['Min', 'Máx'],
  inputs: [
    {
      type: 'range',
      id: 'fieldUrgency',
      className: 'inputRange',
      label: 'Grau de Urgência',
      min: 0,
      max: 10,
      step: 2
    }
  ],
  textarea: {
    label: 'Mensagem',
    className: 'labelFloating'
  }
};
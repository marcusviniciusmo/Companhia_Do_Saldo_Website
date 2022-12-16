import { ContactFormProps } from "../../types/ContactForm";
import Icon from '../../assets/contact/icon.png';

export const MockedData: ContactFormProps = {
  text: `Ajude-nos a melhorar o nosso atendimento. Reclamaçōes, dúvidas,
    sugestōes, fale com a gente.`,
  icon: Icon,
  legend: 'Sugestões ou Reclamaçōes',
  inputs: [
    {
      type: 'text',
      id: 'fieldNameContact',
      className: 'labelFloating',
      label: 'Nome'
    },
    {
      type: 'text',
      id: 'fieldPhoneContact',
      className: 'labelFloating',
      label: 'Celular'
    },
    {
      type: 'text',
      id: 'fieldEmailContact',
      className: 'labelFloating',
      label: 'E-mail'
    },
    {
      id: 'fieldMessageContact',
      className: 'labelFloating',
      label: 'Mensagem'
    }
  ],
  labelSubmitButton: 'Enviar'
};
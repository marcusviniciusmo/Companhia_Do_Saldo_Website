import { FormProps } from "../../types/Form";

const baseUrl = '/orders/';

export const MockedData: FormProps = {
  content: [
    `${baseUrl}identification`,
    `${baseUrl}address`,
    `${baseUrl}message`,
    `${baseUrl}product`,
  ]
};
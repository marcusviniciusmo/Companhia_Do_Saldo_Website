import { SearchCepListProps } from "../SearchCep";

export interface ResultCepProps {
  cepList: SearchCepListProps[];
  cep: string;
  setCep: Function;
  closeSearchModal: Function;
  closeResultModal: Function;
};
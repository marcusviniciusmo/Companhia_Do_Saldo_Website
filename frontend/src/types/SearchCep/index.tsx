import { InputProps } from "../Input";
import { SelectMocks } from "../Select";
import { AddressCitiesProps, AddressRegionsProps, AddressStatesProps } from "../Address";

export interface SearchCepListProps {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
};

export interface SearchCepMocks {
  title: string;
  closeTitle: string;
  selects: SelectMocks[];
  inputs: InputProps[];
  buttonCancelLabel: string;
  buttonSearchLabel: string;
};

export interface SearchCepProps {
  regionsList: AddressRegionsProps[];
  statesList: AddressStatesProps[];
  citiesList: AddressCitiesProps[];
  state: string;
  city: string;
  address: string;
  setState: Function;
  setCity: Function;
  setAddress: Function;
  close: Function;
};
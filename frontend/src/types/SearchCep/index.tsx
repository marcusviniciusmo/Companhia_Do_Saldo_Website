import { InputProps } from "../Input";
import { SelectMocks, SelectProps } from "../Select";
import { AddressCitiesProps, AddressRegionsProps, AddressStatesProps } from "../Address";

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
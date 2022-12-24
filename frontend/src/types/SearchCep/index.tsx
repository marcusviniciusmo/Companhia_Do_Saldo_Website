import { AddressCitiesProps, AddressRegionsProps, AddressStatesProps } from "../Address";

export interface SearchCepProps {
  regionsList: AddressRegionsProps[];
  statesList: AddressStatesProps[];
  citiesList: AddressCitiesProps[];
  state: string;
  setState: Function;
  close: Function;
};
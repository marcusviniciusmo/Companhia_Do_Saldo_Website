import { AddressCitiesProps, AddressRegionsProps, AddressStatesProps } from "../Address";

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
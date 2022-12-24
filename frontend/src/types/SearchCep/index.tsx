import { AddressCitiesProps, AddressRegionsProps, AddressStatesProps } from "../Address";

export interface SearchCepProps {
  regionsList: AddressRegionsProps[];
  statesList: AddressStatesProps[];
  citiesList: AddressCitiesProps[];
  state: string;
  city: string;
  setState: Function;
  setCity: Function;
  close: Function;
};
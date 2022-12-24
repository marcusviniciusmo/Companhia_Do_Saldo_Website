import { AddressRegionsProps, AddressStatesProps } from "../Address";

export interface SearchCepProps {
  regionsList: AddressRegionsProps[];
  statesList: AddressStatesProps[];
  state: string;
  setState: Function;
  close: Function;
};
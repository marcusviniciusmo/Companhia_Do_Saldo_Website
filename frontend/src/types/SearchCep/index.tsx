import { AddressRegionsProps, AddressStatesProps } from "../Address";

export interface SearchCepProps {
  regionsList: AddressRegionsProps[];
  statesList: AddressStatesProps[];
  close: Function;
};
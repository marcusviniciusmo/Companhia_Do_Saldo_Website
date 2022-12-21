import { SelectHTMLAttributes } from "react";

export interface SelectMocks {
  label: string;
};

export interface SelectProps extends SelectHTMLAttributes<HTMLElement> {
  label: string;
  primaryList: any[];
  secondaryList?: any[];
};
import { SelectHTMLAttributes } from "react";

export interface SelectProps extends SelectHTMLAttributes<HTMLElement> {
  option: string;
  primaryList: any[];
  secondaryList?: any[];
};
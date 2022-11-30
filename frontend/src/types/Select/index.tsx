import { SelectHTMLAttributes } from "react";

export interface SelectProps extends SelectHTMLAttributes<HTMLElement> {
  primaryList: any[];
  secondaryList?: any[];
};
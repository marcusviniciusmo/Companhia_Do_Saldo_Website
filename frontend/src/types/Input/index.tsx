import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLElement> {
  label?: string;
  clean?: Function;
};
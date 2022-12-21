import { TextareaHTMLAttributes } from "react";

export interface TextareaMocks {
  label: string;
  className: string;
};

export interface TextareaProps extends TextareaHTMLAttributes<HTMLElement> {
  label: string;
  clean: Function;
};
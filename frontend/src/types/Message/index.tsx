import { InputProps } from "../Input";
import { TextareaMocks } from '../Textarea';

export interface MessageProps {
  icon: string;
  legend: string;
  spans: string[];
  inputs: InputProps[];
  textarea: TextareaMocks;
};
import { IconType } from "react-icons";

export interface FormProps {
  activeId: number;
  content: {
    id: number;
    url: string;
    title: string;
    icon: IconType;
  }[];
};

export interface FieldsetProps {
  icon: string;
};
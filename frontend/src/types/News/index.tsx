import { ImageProps } from "../Global";

export interface NewsProps {
  title: string;
  subtitle: string;
  text1: string;
  text2: string;
  items: {
    id: number;
    image: ImageProps;
    date: string;
    title: string;
  }[];
};

export interface NewsTextProps {
  right?: boolean;
};
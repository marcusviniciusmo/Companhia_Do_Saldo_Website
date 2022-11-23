import { IconType } from 'react-icons';

export interface FooterProps {
  text: string;
  icons: {
    id: number;
    icon: IconType;
    url: string;
    title: string;
    target?: string;
  }[];
};
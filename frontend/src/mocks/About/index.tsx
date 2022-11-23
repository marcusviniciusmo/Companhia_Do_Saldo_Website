import { AboutProps } from "../../types/About";
import { GetAgeOfStore } from "../../utils/Functions";
import Store from '../../assets/about/store.jpg';

export const MockedData: AboutProps = {
  title: 'A Empresa',
  text: `A Companhia do Saldo, mais conhecida como Saldão, está há quase
    ${GetAgeOfStore()} anos no mercado. Uma loja de tecidos, especificamente
    de malhas, oferecendo serviços de qualidade, confiança e credibilidade.`,
  image: {
    url: Store,
    description: 'Companhia do Saldo'
  },
  figcaptionTitle: 'Companhia do Saldo',
  figcaptionText: 'Venha conhecer.'
};
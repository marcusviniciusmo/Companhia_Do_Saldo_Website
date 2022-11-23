import { BsFacebook, BsInstagram, BsFillHouseFill, BsFillTelephoneFill } from 'react-icons/bs';
import { FooterProps } from "../../types/Footer";
import { GetCurrentYear } from "../../utils/Functions";

export const MockedData: FooterProps = {
  text: `Copyright \u00a9 ${GetCurrentYear()} Companhia do Saldo. Todos os
    direitos reservados.`,
  icons: [
    {
      id: 1,
      icon: BsFacebook,
      url: 'http://facebook.com/ciasaldo',
      title: 'Facebook',
      target: '_blank',
      color: 'var(--color-icon-facebook)'
    },
    {
      id: 2,
      icon: BsInstagram,
      url: 'https://www.instagram.com/companhiadosaldo',
      title: 'Instagram',
      target: '_blank',
      color: 'var(--color-icon-instagram)'
    },
    {
      id: 3,
      icon: BsFillHouseFill,
      url: '/',
      title: 'Home',
      color: 'var(--color-icon-home)'
    },
    {
      id: 4,
      icon: BsFillTelephoneFill,
      url: '/contact',
      title: 'Contato',
      color: 'var(--color-icon-contact)'
    }
  ]
};
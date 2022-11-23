import { GalleryProps } from "../../types/Gallery";
import photo01 from '../../assets/gallery/aviamentos.jpg';
import photo02 from '../../assets/gallery/ppLisa.jpg';
import photo03 from '../../assets/gallery/ppEstampada.jpg';
import photo04 from '../../assets/gallery/intima.jpg';
import photo05 from '../../assets/gallery/jacquard.jpg';
import photo06 from '../../assets/gallery/cottonModa.jpg';

export const MockedData: GalleryProps = {
  text: `Veja nossa galeria de fotos, com várias imagens de estampas do que
    temos em estoque e até mesmo das novidades, tabela de cores de cada linha de
    produto, e conheça também, a nossa equipe. Tudo isto, basta apenas clicar na
    categoria abaixo desejada.`,
  images: [
    {
      id: photo01,
      span: 'Aviamentos'
    },
    {
      id: photo02,
      span: 'Fardamentos'
    },
    {
      id: photo03,
      span: 'Infantil'
    },
    {
      id: photo04,
      span: 'Íntima'
    },
    {
      id: photo05,
      span: 'Sport Fitness'
    },
    {
      id: photo06,
      span: 'Moda'
    },
  ]
};
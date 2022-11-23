import { NewsProps } from "../../types/News";
import Item01 from '../../assets/news/news.jpg';

export const MockedData: NewsProps = {
  title: 'Não perca essas novidades!!',
  subtitle: 'por Marcus Mattioli',
  text1: 'Novidades!',
  text2: 'Atualizado em 23 / 11 / 2022',
  items: [
    {
      id: 1,
      image: {
        url: Item01,
        description: 'News'
      },
      date: '23/11/2022',
      title: 'PP Lisa Quatro K com cores para fardamentos'
    },
    {
      id: 2,
      image: {
        url: Item01,
        description: 'News'
      },
      date: '23/11/2022',
      title: 'PP Lisa Quatro K com cores para fardamentos'
    },
    {
      id: 3,
      image: {
        url: Item01,
        description: 'News'
      },
      date: '23/11/2022',
      title: 'PP Lisa Quatro K com cores para fardamentos'
    },
    {
      id: 4,
      image: {
        url: Item01,
        description: 'News'
      },
      date: '23/11/2022',
      title: 'PP Lisa Quatro K com cores para fardamentos'
    },
  ]
};
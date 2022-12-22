import { MenuProps } from "../../types/Menu";
import IconHome from '../../assets/header/home.png';
import IconProducts from '../../assets/header/products.png';
import IconSuppliers from '../../assets/header/suppliers.png';
import IconOrders from '../../assets/header/orders.png';
import IconContact from '../../assets/header/contact.png';

export const MockedData: MenuProps[] = [
  {
    id: 1,
    to: '/',
    label: 'Home',
    icon: IconHome
  },
  {
    id: 2,
    to: '/products',
    label: 'Produtos',
    icon: IconProducts
  },
  {
    id: 3,
    to: '/suppliers',
    label: 'Fornecedores',
    icon: IconSuppliers
  },
  {
    id: 4,
    to: '/orders',
    label: 'Pedidos',
    icon: IconOrders
  },
  {
    id: 5,
    to: '/contact',
    label: 'Contato',
    icon: IconContact
  },
];
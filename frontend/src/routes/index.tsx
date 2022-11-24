import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from "../views/Home";
import { Products } from "../views/Products";
import { Suppliers } from "../views/Suppliers";
import { Orders } from "../views/Orders";
import { Contact } from "../views/Contact";
import { Identification } from '../components/Identification';
import { Address } from '../components/Address';
import { Message } from '../components/Message';
import { Product } from '../components/Product';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/suppliers' element={<Suppliers />} />
        <Route path='/orders' element={<Orders />} />
          <Route path='/orders/identification' element={<Identification />} />
          <Route path='/orders/address' element={<Address />} />
          <Route path='/orders/message' element={<Message />} />
          <Route path='/orders/product' element={<Product />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from "./views/Home";
import { Products } from "./views/Products";
import { Suppliers } from "./views/Suppliers";
import { Orders } from "./views/Orders";
import { Contact } from "./views/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/suppliers' element={<Suppliers />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App

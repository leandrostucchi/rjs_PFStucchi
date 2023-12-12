import {BrowserRouter,Routes, Route   } from "react-router-dom";
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailsContainer } from './components/ItemDetailsContainer';
import { Cart } from "./components/Cart";

import './App.css'
import { CartProvider } from "./contexts/CartContexts";



function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:id" element={<ItemListContainer/>} />
          <Route path="/item/:id" element={<ItemDetailsContainer/>} />
          <Route path="/cart/" element={<Cart/>} />
          <Route path="*" element={<>Error 404</>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
    );
}

export default App

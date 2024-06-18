
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../css/main.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import Header from "./components/header/Header";
import ItemListContainer from "./components/main/ItemListContainer";
import ItemDetailContainer from "./components/main/itemlist/item/ItemDetailContainer";
import Carrito from "./components/main/Carrito";
import {  CartProvider } from "./context/CartContext";
import Inicio from "./components/Inicio";
import CheckOut from "./components/CheckOut";


function App() {


  return (
    <CartProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/category/:categoryId" element={< ItemListContainer/>} />
          <Route path="/item/:itemId" element={< ItemDetailContainer/>} />
          <Route path="/carrito" element={<Carrito/>}/>
          <Route path="/finalizar-compra" element={<CheckOut/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
    
    
  )
}

export default App


import Header from "./components/header/Header";
import '../css/main.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import ItemListContainer from "./components/main/ItemListContainer";
import ItemDetailContainer from "./components/main/itemlist/item/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const numerito = ""
  return (
  <BrowserRouter>
    <Header numerito={numerito} />
    <Routes>
      <Route path="/category/:categoryId" element={< ItemListContainer/>} />
      <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App

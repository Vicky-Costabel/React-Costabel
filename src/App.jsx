
import Header from "./components/header/Header";
import ItemListContainer from "./components/ItemListContainer";

import '../css/main.css'

function App() {
 
  return (
  <>
  <Header />
  <ItemListContainer />
  </>
  )
}

function MostrarUsurario({nombre, edad}){
  return <h1>{nombre} {edad}</h1>;
}

export default App

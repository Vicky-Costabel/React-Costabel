import { pedirProducto } from "../../helpers/pedirDatos"
import { useEffect, useState } from "react"
import ItemList from "./itemlist/ItemList";
import categories from "../../data/categorias.json"
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
  let {categoryId} = useParams();
  
  const [productos, setProductos] = useState([]);
 
  useEffect(() => {
    pedirProducto()
      .then((res) => {
        setProductos(res)
      })  
  }, [])

  useEffect(() => {
    
    pedirProducto()
      .then((res) => {
        if (!categoryId) {
          setProductos(res);
        } else {
          setProductos(res.filter((productos) => productos.categoria.id === categoryId));
        }
      })
  }, [categoryId]);
    

  return (
    <div>
      <main className="main">
        < ItemList productos={productos} />
      </main>
    </div>
  )
}

export default ItemListContainer
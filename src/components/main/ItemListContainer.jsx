
import { useEffect, useState } from "react"
import ItemList from "./itemlist/ItemList";
import { useParams } from 'react-router-dom';
import data from "../../data/productos.json"


const ItemListContainer = () => {
  let {categoryId} = useParams();
  
  const [productos, setProductos] = useState([]);
 

  const pedirProducto = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data)
      })
    })
  }
 
  useEffect(() => {
    
    pedirProducto()
      .then((res) => {
        if (!categoryId) {
          setProductos(res);
        } else {
          setProductos(res.filter((prod) => prod.categoria.id === categoryId));
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
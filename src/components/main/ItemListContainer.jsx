
import { useEffect, useState } from "react";
import ItemList from "./itemlist/ItemList";
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/configuracion.js"


const ItemListContainer = () => {
  let {categoryId} = useParams();
  const [productos, setProductos] = useState([]);

 
  useEffect(() => {
    
    const productosRef = collection(db, "productos");
    const q = categoryId ? query(productosRef, where("categoria.id", "==", categoryId)) : productosRef;

    getDocs(q)
      .then((res)=>{
        setProductos(
          res.docs.map((doc) => {
            return {...doc.data(), id: doc.id}
          })
        )
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
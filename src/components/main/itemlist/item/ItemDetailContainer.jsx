import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './detail/ItemDetail';
import { doc, getDoc} from "firebase/firestore";
import { db } from '../../../../firebase/configuracion.js'

const ItemDetailContainer = () => {
  let {itemId} = useParams();

  let [producto, setProducto] = useState(undefined);

  useEffect(() => {
    
    const docRef = doc(db, "productos", itemId);
    getDoc(docRef)
      .then(res => {
        setProducto({...res.data(), id: res.id})
      })

  }, [itemId])
    
  return (
    <div className='detail-container'>
      {producto ? < ItemDetail producto={producto}/> : "cargando..."}
    </div>
  )
}

export default ItemDetailContainer
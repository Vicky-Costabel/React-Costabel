import React, { useEffect, useState } from 'react'
import { pedirItemPorId } from '../../../../helpers/pedirDatos';
import ItemDetail from './detail/ItemDetail';

const ItemDetailContainer = ( {itemId} ) => {
    const [item, setItem] = useState(null);
    useEffect(() => {
      pedirItemPorId(Number(itemId))
      .then((res) => {
        setItem(res);
      })
    }, [itemId])
    

  return (
    <div>
        {item && < ItemDetail item={item} />}
    </div>
  )
}

export default ItemDetailContainer
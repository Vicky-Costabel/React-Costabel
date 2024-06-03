import React from 'react'
import Item from './item/Item'

const ItemList = ( {productos} ) => {
  return (
    <div>
        <div className='productos'>
        {
          productos.length > 0 ?
          productos.map(prod => {
            return <Item key={prod.id} productos={prod} />
          })
          : <p>Cargando productos...</p>
        }
        </div>
    </div>
  )
}

export default ItemList
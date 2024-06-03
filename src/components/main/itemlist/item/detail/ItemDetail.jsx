
const ItemDetail = ( {itemId} ) => {

  return (
    <div className='con-detalle'>
        <div className='det-producto'>
            <img src={item.imagen} alt="" />
            <img src={item.botella} alt="" />
        </div>
        <div>
            <h3 className='det-titulo'>{item.nombre}</h3>
            <p className='det-descripcion'>{item.descripcion}</p>
            <p className='det-categoria'>{item.categoria}</p>
            <p className="det-precio">{item.precio}</p>
        </div>

    </div>
  )
}

export default ItemDetail
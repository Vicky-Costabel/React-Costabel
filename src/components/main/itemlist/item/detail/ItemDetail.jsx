import React, { useContext } from 'react'
import { CartContext } from '../../../../../context/CartContext'
import ItemCount from './ItemCount';

const ItemDetail = ( {producto} ) => {
    const {agregarAlCarrito} = useContext(CartContext);
    
    return (
        <div className='item-detail'>
            <div className='contenedor-detalles'>
                <div className='det-imagenes'>
                    <img src={producto.logo} className='det-logo' alt="logo del profucto" />
                    <div className='con-det-img'>
                        <img src={producto.imagen} className='det-img' alt="imagen del producto" />
                    </div>
                </div>
                <div className='con-detalles'>
                    <div className='det-producto'>
                        <h1 className='det-titulo'>{producto.nombre}</h1>
                        <div className='cont-detalles-productos'>
                            <div className='etiqueta-promo'>
                                <img src="/img/etiqueta.png" className=' etiqueta' alt="" />
                                <p className='det-promo'>{producto.promocion}</p>
                            </div>
                            <p className='det-des'>{producto.descripcion}</p>
                        </div>
                    </div>
                    < ItemCount producto={producto} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
import React, { useContext, useState } from 'react'
import { CartContext } from '../../../../../context/CartContext';

const ItemCount = ( {producto} ) => {
    const { agregarAlCarrito } = useContext(CartContext);
  
    const [cantidad, setCantidad] = useState(0)

    const handelRestar = () => {
        cantidad > 1 && setCantidad(cantidad -1)
    }

    const handelSumar = () => {
        cantidad < 10 && setCantidad(cantidad +1)
    }

    return (
        <div className='item-count'>
            <div className='item-cou-prec-cant'>
                <div className='det-con-precio'>
                    <p className='det-precio'>${producto.precio}</p>
                </div>
                <p className='item-count-cant'>x {cantidad}</p>
            </div>
            <div className='item-cou-botones'>
                <div className='det-con-boton'>
                    <button onClick={handelRestar} className='resta'>
                        <i className="bi bi-dash handel"></i>
                    </button>
                    <button onClick={() => agregarAlCarrito(producto)} className='det-boton'>
                        <i className="bi bi-cart handel"></i>
                    </button>
                    <button onClick={handelSumar} className='suma'>
                        <i className="bi bi-plus handel"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount
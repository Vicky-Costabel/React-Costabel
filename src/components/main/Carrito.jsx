import React, { Fragment, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';

const Carrito = () => {
  const {carrito, calcularTotal, vaciarCarrito, eliminarProducto} = useContext(CartContext);

  return (
    <div className='carrito'>
      <div className='con-carrito'>
        <div className='carr-item-list'>
          {carrito.map((prod) => 
            <Fragment key={prod.id} >
            <div className='carr-items'>
              <div className='carrito-imagen'>
                <img className='carr-img' src={prod.logo} alt="" />
              </div>
              <div className='carrito-nombre'>
                <h1 className='carr-titulo'>{prod.nombre} :</h1>
              </div>
              <div className='carrito-precio'>
                <p className='carr-precio'>${prod.precio}</p>
              </div>
              <button className='carrito-boton' onClick={() => { eliminarProducto(prod)}}>
                <i className="bi bi-trash3 carr-el"></i>
              </button>
            </div>
            </Fragment>
          )}
        </div>
        {carrito.length > 0 ? 
          <>
          <div className='total'>
            <h2 className='carr-tot'>Total: ${calcularTotal()}</h2>
            < Link className='carr-fin' to="/finalizar-compra"> 
              Finalizar Comrpa
            </Link>
            <button onClick={vaciarCarrito} className='vac-carr'> 
              <i class="bi bi-trash3 i-vac"></i>
              <i className="bi bi-cart i-vac"> </i>
            </button>
          </div>
          </> : 
            <h2 className='carr-none'>Carrito Vacio... ¡Llenalo con productos de Fink Manufactoring!</h2>
        }
      </div>
    </div>
  )
}

export default Carrito
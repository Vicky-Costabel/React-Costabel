import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../../../context/CartContext"


const Item = ( {productos} ) => {
  const {agregarAlCarrito} = useContext(CartContext)

  return (
    <div className="item">
      <div className='producto'>
        <div className="marco-img-producto">
        <Link to={`/item/${productos.id}`}>
            <img src={productos.logo} alt="" className="img-producto" />
        </Link>
        </div>
        <div className="contenedor">
          <div className="con-des-producto">
            <div className="des-producto">
              <h4 className="nom-producto">{productos.nombre}</h4>
              <p className="promo-producto">{productos.promocion}</p>
              <div className="con-botones">
                <Link to={`/item/${productos.id}`}>
                  <p className="ver-mas">ver más</p>
                </Link>
                <button className="boton-item" onClick={()=> agregarAlCarrito(productos)}>
                  <i className="bi bi-basket2 boton-item-icono"></i>
                </button>
              </div>
            </div>
            <div className="precio">
              <p className="pre-producto">${productos.precio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item
import { Link } from "react-router-dom"


const Item = ( {productos} ) => {
  return (
    <div className="item">
      <div className='producto'>
        <div className="marco-img-producto">
        <Link to={`/item/${productos.id}`}>
            <img src={productos.imagen} alt="" className="img-producto" />
        </Link>
        </div>
        <div className="contenedor">
          <div className="con-des-producto">
            <div className="des-producto">
              <h4 className="nom-producto">
                <a href="">{productos.nombre}</a>
              </h4>
              <p className="desc-producto">{productos.descripcion}</p>
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
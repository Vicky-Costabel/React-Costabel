import { Link } from "react-router-dom";


const NavBar = () => {



  const menuSeleccion = 'seleccion';
  return (
    <nav className="navegacion">
      <div className="marco">
        <div className="marco-seleccion">
          <p className="indi-nav">{menuSeleccion}</p>
        </div>
      </div>
      <div className="selecciones">
        <ul className="menu">
          <li>
            < Link to="/category/armas">
              <i class="bi bi-crosshair"></i> {/* Armas y Municiones */}
            </Link>
          </li>
          <li>
            <Link to="/category/indumentaria">
              <i class="bi bi-backpack"></i> {/* indumentaria */}
            </Link>
          </li>
          <li>
            <Link to="/category/vigorizador">
              <i class="bi bi-brightness-high"></i> {/* vigorizadores */}
            </Link>
          </li>
        </ul>
      </div> 
    </nav>
  )
}

export default NavBar
import { Link } from "react-router-dom";


const NavBar = () => {

  return (
    <nav className="navegacion">
      <div className="selecciones">
        <ul className="menu">
          <li>
            < Link to="/category/armas">
              <i className="bi bi-crosshair"></i> {/* Armas y Municiones */}
            </Link>
          </li>
          <li>
            <Link to="/category/indumentaria">
              <i className="bi bi-backpack"></i> {/* indumentaria */}
            </Link>
          </li>
          <li>
            <Link to="/category/vigorizador">
              <i className="bi bi-brightness-high"></i> {/* vigorizadores */}
            </Link>
          </li>
        </ul>
      </div> 
    </nav>
  )
}

export default NavBar
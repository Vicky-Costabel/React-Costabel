
import NavBar from './navbar/NavBar'
import Carrito from './navbar/Carrito'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <header className='header'>
      <div className='logo'>
        < Link to= {"/"}>
          <h1>Fink Manufactoring</h1>
        </Link>
      </div>

      <div className='nav-car'>
        <NavBar />
        <Carrito numerito={props.numerito} />
      </div>
    </header>
  )
}

export default Header
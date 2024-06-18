
import NavBar from './navbar/NavBar'
import CartWidget from './navbar/CartWidget'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <div className='nav-car'>
        <div className='logo'>
          < Link to= {"/"}>
            <h1>Fink Manufactoring</h1>
          </Link>
        </div>
        <NavBar />
        <CartWidget/>
      </div>
    </header>
  )
}

export default Header
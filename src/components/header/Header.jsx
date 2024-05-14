import React from 'react'
import NavBar from './navbar/NavBar'
import Carrito from './navbar/Carrito'

const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <a href="#">
          <h1>Fink Manufactoring</h1>
        </a>
      </div>
      <div className='nav-car'>
      <NavBar />
      <Carrito />
      </div>
    </header>
  )
}

export default Header

const Carrito = (props) => {

  return (
    <div className='carrito'>
      <i className="bi bi-cart"></i>
      <p>{props.numerito}</p>
    </div>
  )
}

export default Carrito
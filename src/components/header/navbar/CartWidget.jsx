import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../../context/CartContext"

const CartWidget = () => {
  const {calcularCantidad} = useContext(CartContext)

  return (
    <Link className="cartwidget" to="/carrito">
      <p>{calcularCantidad()}</p>
      <i className="bi bi-cart"> </i>
    </Link>
  )
}

export default CartWidget
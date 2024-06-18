import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { useForm } from "react-hook-form"
import { collection, addDoc } from 'firebase/firestore'
import {db } from "../firebase/configuracion.js"

const CheckOut = () => {
    const {carrito, calcularTotal, vaciarCarrito} = useContext(CartContext)
    const { register, handleSubmit} = useForm()
    let [docId, setDocId] = useState("")

    const comprar = (data) =>{
        const pedido= {
            cliente: data,
            productos: carrito,
            total: calcularTotal()
        }
        const pedidosRef =collection(db, "pedidos")
        addDoc(pedidosRef, pedido)
            .then((doc)=> {
                setDocId(doc.id)
                vaciarCarrito()

            })
            
    }
    if (docId) {
        return(
            <>
            <div className='checkout'>
                <div className='check'>
                    <h2 className='check-agr'>Gracias por confiar en</h2>
                    <h1 className='check-titulo'>Fink Manufacturing</h1>
                    <p className='check-txt'>En los próximos días recibirá su producto el comprobante de su compra y el estado del envido de su producto</p>
                    <p className='check-id'>su pedido es: <strong>{docId} </strong></p>
                </div>
            </div>
            </>

        )
    }

  return (
    <div className='checkout'>
        <div className='check'>
            <form onSubmit={handleSubmit(comprar)}>
                <input type="text" placeholder='Ingrese su nombre' {...register("nombre")}/>
                <input type="text" placeholder='Ingrese su e-mail' {...register("email")}/>
                <input type="text" placeholder='Ingrese su DNI' {...register("dni")}/>
                <button type='submit'>
                    <i className="bi bi-cart"> </i>
                </button>
            </form>
        </div>
    </div>
  )
}

export default CheckOut
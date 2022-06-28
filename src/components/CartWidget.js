import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { contexto } from './MiContexto'

const CartWidget = () => {

    const resultado = useContext(contexto)
    console.log(resultado)

    return (
      <NavLink to="./Carrito">
         <span className="material-symbols-outlined">
          shopping_cart
         </span>
         {resultado.cantidad_total}

      </NavLink>
    )
}

export default CartWidget 





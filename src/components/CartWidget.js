import React from 'react';
import {NavLink} from "react-router-dom";

const CartWidget = () => {
  return (
    <> 
    <NavLink to="./Carrito">
    <span className="material-symbols-outlined">
    shopping_cart
    </span>
    </NavLink>
    </>
  )
}

export default CartWidget ;

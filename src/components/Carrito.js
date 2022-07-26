import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import  {contexto} from './MiContexto'

const Carrito = () => {
  const {carrito}= useContext(contexto)

  return (
    <>
    <h1>Carrito</h1>
    <Link to="/Cart"> Proceder con la compra</Link>

    </>

    
    
  ) 
}

export default Carrito
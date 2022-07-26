import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import  {contexto} from './MiContexto'

const Carrito = () => {
  const {carrito}= useContext(contexto)

  const handleSubmit = (e)=> {
    e.preventdefault()
    const nombre= e.target.elements.nombre.value
    const tel= e.target.elements.telefono.value
    const email= e.target.elements.email.value
    
    const usuario= {nombre, tel, email}
    console.log(usuario)
  }
  const handleClick = (e) => {
    e.preventdefault()
    
  }

  return (
    <>
    <h1>Carrito</h1>
    <Link to="/Cart"> Proceder con la compra</Link>
    <form onSubmit={handleSubmit}>
      <div>
      <input type="text" id="nombre" placeholder="nombre..."/>
      </div> 

      <div>
      <input type="email" id="email" placeholder="email..."/>
      </div>

      <div>
      <input type="number" id="telefono" placeholder="telefono..."/>
      </div>
      
      <button> comprar</button>
    </form>

    </>

    
    
  ) 
}

export default Carrito
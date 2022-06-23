import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemCount = ({stock, initial, onAdd}) => {

    const [contador, setContador]=useState(initial)

//boton aumentar conmtador
    const aumentarContador = () => {
        if (contador<5){ 
            setContador (contador + 1)
        };
       };

//boton disminuir contador
    const bajarContador = () => {
        if (contador > 0) { 

            setContador (contador - 1)
         };
        };

//boton confirmar contador
    const confirmarContador = (e) => {
        onAdd=(contador)
    };

  return (
    <>
     <p> El contador va {contador}</p>

     <button onClick={aumentarContador}> Aumentar</button>
     <button onClick={bajarContador}>Bajar</button>

     <Link to="/Carrito">
     <button onClick={confirmarContador}>Agregar al carrito</button>
     </Link>

    </>
  )
}

export default ItemCount
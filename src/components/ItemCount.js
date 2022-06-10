import React from 'react'
import { useState } from 'react';

const ItemCount = ({stock, initial, onAdd}) => {

    //definimos contador y setContador

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
    const confirmarContador = () => {
        alert("se agregaron " + contador + " al carrito")
    };

  return (
    <>
     <p> El contador va {contador}</p>

     <button onClick={aumentarContador}> Aumentar</button>
     <button onClick={bajarContador}>Bajar</button>
     <button onClick={confirmarContador}>Agregar al carrito</button>
    </>
  )
}

export default ItemCount
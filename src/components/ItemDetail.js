import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({producto}) => {

  const onAdd = (cantidadSeleccionada)=> {
    console.log("Desde item detail : " + cantidadSeleccionada)
  }
  return (
   <>
   <img src={producto.image} alt={producto.name}/>
   <h2>{producto.name}</h2>
   <h2>{producto.descripcion}</h2>
   <h2>{producto.precio}</h2>
   <ItemCount initial={1} onAdd={onAdd}/>
   </>
  )
}

export default ItemDetail
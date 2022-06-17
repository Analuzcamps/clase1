import React from 'react'

const ItemDetail = ({producto}) => {
  return (
   <>
   <img src={producto.image} alt={producto.name}/>
   <h2>{producto.name}</h2>
   <h2>{producto.descripcion}</h2>
   </>
  )
}

export default ItemDetail
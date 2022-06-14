//solo va a mapear lo que hagamos e item.js 
import React from 'react'
import Item from './Item'


//nos va a traer cuantas cards de productos tengamos

const ItemList = ({products}) => {
  return (
    products.map (p=> 
        <Item
        id={p.id}
        name={p.name}
        image={p.image}/>)
  )
}

export default ItemList
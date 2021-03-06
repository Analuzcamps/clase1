
import React from 'react'
import Item from './Item'

const ItemList = ({productos}) => {
  return (
    productos.map (p=> 
        <Item
        id={p.id}
        name={p.name}
        image={p.image}
        />)
  )
}

export default ItemList
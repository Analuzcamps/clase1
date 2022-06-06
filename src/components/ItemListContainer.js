import React from 'react'

const ItemListContainer = (props) => {
    console.log (props.greeting)
  return (
      <p>{props.greeting}</p>
  
  )
}

export default ItemListContainer
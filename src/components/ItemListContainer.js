import React from 'react'
import ItemCount from './ItemCount'


const ItemListContainer = (props) => {
    console.log (props.greeting)
  return (
  
    
  <>
  <p>{props.greeting}</p>
  <ItemCount stock={5} initial={1} onAdd={'ondAdd'}/>
  
  </>
  
   
      
  
  )
}

export default ItemListContainer
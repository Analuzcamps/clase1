import React, { useEffect, useState } from 'react'
import customFetch from '../utils/customFetch'
import ItemCount from './ItemCount'
import productos from '../utils/productos'
import ItemList from './ItemList'


function ItemListContainer() {
  const [items, setItems] = useState([])

  useEffect(() => {
    customFetch(3000, productos) //simulamos carga de datos
    .then(resultado => setItems(resultado)) 
  }, [items])
  return (
    <>
      <ItemList productos={items}/>
      <ItemCount stock={5} initial={1} onAdd={'ondAdd'}/>
  
    </>
    
  )
}






export default ItemListContainer;
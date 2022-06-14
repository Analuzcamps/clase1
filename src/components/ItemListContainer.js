import React, { useEffect, useState } from 'react'
import customFetch from '../utils/customFetch'
import ItemCount from './ItemCount'
import productos from '../utils/productos'

function ItemListContainer (){

  const ItemListContainer = (props) => {
    console.log (props.greeting)
  return (
  
    
  <>
  <p>{props.greeting}</p>
  <ItemCount stock={5} initial={1} onAdd={'ondAdd'}/>
  
  </>

   
  
  )
}

//recibe la promesa, los parametros son el tiempo y el array (promise) que escribimos en itemList
const [items, setItems]= useState([])
useEffect(()=>{
  customFetch(3000, productos)
  .then(resultado=> setItems(resultado))

  return (
    <>
    <h1>Hola</h1></>
  )

}, [items])


}











export default ItemListContainer;
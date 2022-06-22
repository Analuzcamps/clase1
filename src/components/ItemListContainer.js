import React, { useEffect, useState } from 'react'
import ItemCount from './ItemCount'
import productos from '../utils/productos'
import ItemList from './ItemList'
import {useParams} from 'react-router-dom'


const ItemListContainer = ({greeting})=> {
  const [Item, setItems] = useState([])

  const {Id}= useParams()
  console.log(Id.category)
  console.log(Id.details)

  useEffect(() => {

   const MockAsync = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos)
      }, 3000)
    })
   
    MockAsync.then(productos => { 
      setItems(productos) 
    })
  }, [Id])
  

 return (
      <>
      <h2>{greeting}</h2>
      <ItemList productos={Item}/>
      <ItemCount stock={5} initial={1} onAdd={'ondAdd'}/>
    </>
      
    )

}
  


   







export default ItemListContainer;
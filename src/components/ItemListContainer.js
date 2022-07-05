import React, { useEffect, useState } from 'react';
import productos from '../utils/productos' ;
import ItemList from './ItemList' ;
import {useParams} from 'react-router-dom' ;
import {db} from './firebase.js'
import {getDocs, collection, query, where} from 'firebase/firestore'

const ItemListContainer = ({greeting})=> {
  const [Item, setItems] = useState([]);

  const {Id}= useParams();
  console.log(Id);

  useEffect(() => {

    const collectionProductos = collection (db, "Id")

    const ref = Id
    ? query(collectionProductos, where ('category', '==', 'Id')) 
    : collectionProductos ;

const consulta= getDocs(collectionProductos)

consulta 
  .then((resultado)=>{
  
    const productosMapeados = resultado.docs.map(referencia=>{
      const aux = referencia.data()
      aux.id = referencia.id
      return aux
    })

    setItems(productosMapeados)
  })
  .catch((error)=>{
    console.log (error)
  })

  }, [Id]);


  return (
    <>
    <h2>{greeting}</h2>
    <ItemList productos={Item}/>
    
  </>
  )

}


   /*const MockAsync = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos)
      }, 3000);
    });
   
    MockAsync.then ((productos) => { 
     if (Id) {
      //si existe un Id (es decir si estamos en la ruta category/Id) se filtra el array por id de categoria y se setea

      const productosFiltradosCategoria = productos.filter((producto)=> producto.category ===Id);
        
        setItems(productosFiltradosCategoria);

     } else {
      
      //sino, traeme todos los productos 
      
      setItems (productos);
    }
    });
  }, [Id]); */
  

 /*return (
      <>

      <h2>{greeting}</h2>
      <ItemList productos={Item}/>

    </>
      
    );*/


  


   







export default ItemListContainer;
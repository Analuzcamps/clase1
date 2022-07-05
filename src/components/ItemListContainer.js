import React, { useEffect, useState } from 'react';
import productos from '../utils/productos' ;
import ItemList from './ItemList' ;
import {useParams} from 'react-router-dom' ;


const ItemListContainer = ({greeting})=> {
  const [Item, setItems] = useState([]);

  const {Id}= useParams();
  console.log(Id);

  useEffect(() => {

   const MockAsync = new Promise((resolve) => {
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
  }, [Id]);
  

 return (
      <>

      <h2>{greeting}</h2>
      <ItemList productos={Item}/>

    </>
      
    );

};
  


   







export default ItemListContainer;
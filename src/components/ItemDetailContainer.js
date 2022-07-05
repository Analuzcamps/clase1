import React, { useEffect, useState } from 'react'
import productos from "../utils/productos"
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
const ItemDetailContainer =()=> {
  const [item, setItem] = useState({})

  const { id }= useParams();

  useEffect(() => {

   const MockAsync = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos)
      }, 3000);
    });
   
    MockAsync.then ((productos) => {
  //No hace falta ver si hay id (condicional) porque el detalle siempre tiene un id
      const productoFiltradoId = productos.filter((producto)=> producto.id===Number (id));

        
        setItem(productoFiltradoId[0]);

        //se pone indica 0 porque filter devuelve un array, el indice siempre va a ser 0 porque solo 1 producto coincide con el id

    });
  }, [id]);
  



return <ItemDetail producto={item} /> ;

};

export default ItemDetailContainer ;



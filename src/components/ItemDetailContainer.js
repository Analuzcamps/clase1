import React, { useEffect, useState } from 'react'
import productos from "../utils/productos"
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import {db} from './firebase'
import {getDoc, collection} from 'firebase/firestore'

const ItemDetailContainer =()=> {
  const [item, setItem] = useState({})

  const { id }= useParams();

  useEffect(() => {

const ref= doc(collectionProductos, id);
getDoc(ref)
.then((respuesta=>{
  setItem({
    id: response.id , 
    ...response.data(), 

  });
})); 
  }, [id]);
  return <ItemDetail item={item}/>
};








export default ItemDetailContainer ;



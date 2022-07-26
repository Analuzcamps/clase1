import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import {db} from '../firebase'
import {collection, getDoc} from 'firebase/firestore'

const ItemDetailContainer =()=> {
  const [item, setItem] = useState({})

  const { id }= useParams();

  useEffect(() => {

const collectionProductos = collection (db, "productos")
const ref= getDoc(collectionProductos, id);
getDoc(ref)
.then((response=>{
  setItem({
    id: response.id , 
    ...response.data(), 

  });
})); 
  }, [id]);
  return <ItemDetail item={item}/>;
};








export default ItemDetailContainer ;



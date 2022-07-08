import React, { useEffect, useState } from 'react'
import productos from "../utils/productos"
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import {db} from '../firebase'
import {getDoc} from 'firebase/firestore'

const ItemDetailContainer =()=> {
  const [item, setItem] = useState({})

  const { id }= useParams();

  useEffect(() => {

const ref= getDoc(db, id);
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



import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import {db} from '../firebase'
import {collection, getDoc, doc} from 'firebase/firestore'

const ItemDetailContainer =()=> {
  const [item, setItem] = useState({})
  const [loading, setLoading]= useState(true);
  const { id}  = useParams();

  useEffect(() => {

const collectionProductos = collection (db, "productos")
const ref= doc(collectionProductos, id);
getDoc(ref)
.then((response)=>{
  setItem(response.data());
  setLoading(false);
})
    .catch((error)=>{
      console.log(error);
      setLoading(true);
    });

  }, [id]);
  return loading ? <p> cargando productos...</p> : <ItemDetail producto={item}/>;
};

export default ItemDetailContainer ;



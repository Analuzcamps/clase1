import React, { useEffect, useState } from 'react'
import {traerProducto} from '../utils/productos'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = ()=> {
  const [producto, setProducto] = useState({})

  const {id}= useParams()
  console.log(id.detail)

  useEffect(() => {
    traerProducto(id)
    .then((res)=>{ 
    setProducto (res);
})
.catch ((error)=>{ 
    console.log (error);
 });
}, [id]);

console.log (producto);

return <ItemDetail producto={producto}/>

};

export default ItemDetailContainer ;
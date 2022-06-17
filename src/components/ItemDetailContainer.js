import React, { useEffect, useState } from 'react'
import {traerProducto} from '../utils/productos'
import ItemDetail from './ItemDetail';


const ItemDetailContainer = ()=> {
  const [producto, setProducto] = useState({})

  useEffect(() => {
    traerProducto()
    .then((res)=>{ 
    setProducto (res);
})
.catch ((error)=>{ 
    console.log (error);
 });
}, []);

console.log (producto);

return 
    <ItemDetail producto={producto}/>

};

export default ItemDetailContainer ;
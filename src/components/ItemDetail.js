import React from 'react';
import ItemCount from './ItemCount';
import { useState, useContext } from 'react';
import {Link} from 'react-router-dom';
import { MiProvider } from './MiContexto';

const ItemDetail = ({producto}) => {

  const [renderCount, setRenderCount]= useState(false);
  const {agregarProducto}=useContext(MiProvider);

  const onAdd = (cantidadSeleccionada)=> {

    console.log("Desde item detail : " + cantidadSeleccionada);
    setRenderCount(true);
    agregarProducto(producto, cantidadSeleccionada);

  }; 

  return (
   <>
   <img src={producto.image} alt={producto.name}/>
   <h2>{producto.name}</h2>
   <h2>{producto.descripcion}</h2>
   <h2>{producto.precio}</h2>

   {renderCount ? (
     <> 
        <h3> gracias por comprar</h3>
        <> 
        <Link to={"/Cart"}> 
        <button> terminar compra </button>
        </Link>
        </>
     </>
   ): (
    <ItemCount stock={producto.stock} initial={0} onAdd={onAdd}/>

   )}
    </>
  );
};
  
export default ItemDetail; 

import { useContext } from 'react';
import productos from '../utils/productos';
import  {contexto} from './MiContexto'


const Cart = () => {

  const {carrito, eliminarProducto} = useContext(contexto);

  return (
    <>
        {carrito.length === 0 ? (
            <h3>Tu carrito está vacio</h3>
        ) : (
            <>
  
                    {carrito.map((prod) => (
                      
                           <>
                            <h2>{prod.name}</h2>
                            <h2>${prod.price}</h2>
                            <h2>Cantidad: {prod.cantidadSeleccionada}</h2>
                            <button onClick={() => eliminarProducto(prod.id)}>
                                Eliminar
                            </button>

                            </>
                       
                    ))}
                          <> 

                             <button onClick={eliminarProducto}>Vaciar carrito</button>
                          </>
               
            </>
        )}
    </>
);
};

export default Cart;


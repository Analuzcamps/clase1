
import { useContext, useState } from 'react';
import  {contexto} from './MiContexto'
import Form from './Form';
import {db} from '../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';


const Cart = () => {
  const {carrito, eliminarProducto, vaciarCarrito} = useContext(contexto);
  const [data, setData] = useState({ name: '', email: '', phone: '' });
  const [orderId, setOrderId] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
        ...data,
        [name]: value,
    });
};
  const handleSubmit = (e) => {
    e.preventDefault();
    const objOrden = {
        buyer: {
            name: data.name,
            phone: data.phone,
            email: data.email,
        },
        Cart,
        date: serverTimestamp(),
    };

    const ref = collection(db, 'orders');
    addDoc(ref, objOrden).then((response) => {
        setOrderId(response.id);
    });
};
if (orderId !== '') {
    return <h1>Gracias por tu compra, tu número de envío es: {orderId}</h1>;
}

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

                             <button onClick={vaciarCarrito}>Vaciar carrito</button>
                          </>


                          <Form
                        handleChange={handleChange}
                        data={data}
                        handleSubmit={handleSubmit}
                    />
               
            </>
        )}
    </>
);
};

export default Cart;


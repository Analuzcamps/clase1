import { createContext, useState } from "react"

export const contexto = createContext()

const Provider = contexto.Provider
//Provider : Es un componente que viene adentro de un contexto y sirve para : 1) Determina quienes tienen acceso a la informacion y 2) Determina el valor del contexto

export const MiProvider = ({children}) => {
    const [carrito, setCarrito] = useState([])

    const agregarProducto = (producto, cantidadSeleccionada) =>{
      if (isOnCart(producto.id)){
        sumarCantidad(producto,cantidadSeleccionada)
      } else {  setCarrito([...carrito, { ...producto, cantidadSeleccionada }]);
    }}
    }
    const isOnCart = (id) => carrito.some((prod) => prod.id === id);

    const sumarCantidad = (producto, cantidadSeleccionada) => {
        const newProducts = carrito.map((prod) => {
            if (prod.id === producto.id) {
                const newProduct = {
                    ...prod,
                    cantidadSeleccionada: prod.cantidadSeleccionada + cantidadSeleccionada,
                };
                return newProduct;
            } else {
                return prod;
            }
        });
        setCarrito(newProducts);
    };



    const eliminarProducto = (id) => {
        setCarrito(carrito.filter((prod) => prod.id !== id));
    };



    const vaciarCarrito = (_) => {
         setCarrito([]);
    

    const valorDelContexto = {
        eliminarProducto: eliminarProducto, 
        vaciarCarrito: vaciarCarrito, 
      
        

    }


    return (
        <Provider value={valorDelContexto}>
            ({children})
        </Provider>
    )

    }

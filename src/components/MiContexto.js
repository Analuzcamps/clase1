 import { createContext } from "react";

 const contexto = createContext()
 const Provider= contexto.Provider

 export const MiProvider= ({children})=> {
    const valorDelContexto={
        carrito:[],
    }
    return (
   <Provider Value= {valorDelContexto}>
    {children}

   </Provider>
    )
 }

 
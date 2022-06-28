import React from 'react' ;
import Header from './components/Header' ;
import ItemListContainer from './components/ItemListContainer';
import Main from './components/Main' ;
import Footer from './components/Footer';
import NavBar from './components/NavBar' ;
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route, } from 'react-router-dom'
import Carrito from './components/Carrito';
import Cart from './components/Cart';
import {MiProvider} from './components/MiContexto';

const App = () => {
    return (
     
<BrowserRouter>

     <MiProvider>
        <NavBar />
           <Routes>
            <Route path="/" element={<ItemListContainer greeting='Bienvenido al mundo del Rodaje!'/>}/>
            <Route 
                   path="/category/:Id" 
                   element={ <ItemListContainer greeting="Bienvenido al mundo del rodaje!" />} />
            <Route path="/detail/:id" element={ <ItemDetailContainer/>}/>
            <Route path="/carrito" element={ <Carrito/>}/>
            <Route path="/Cart" element={ <Cart/>}/>
            </Routes>

        <Header/>
         <Main/>
</MiProvider>
        
        <Footer />
</BrowserRouter>
     

    ) ;
} ;
export default App ; 
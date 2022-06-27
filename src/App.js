import React from 'react' ;
import Header from './components/Header' ;
import ItemListContainer from './components/ItemListContainer';
import Main from './components/Main' ;
import Footer from './components/Footer';
import NavBar from './components/NavBar' ;
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route, } from 'react-router-dom'
import Carrito from './components/Carrito';
import Checkout from './components/Checkout';
import {MiProvider} from './components/MiContexto';

const App = () => {
    return (
     
<BrowserRouter>
<NavBar />
        <Routes>
            <Route path="/" element={<h1>HOME</h1>}/>
            <Route path="/category/:Id" element={ <ItemListContainer greeting="Bienvenido al mundo del rodaje!" />} />
            <Route path="/detail/:id" element={ <ItemDetailContainer/>}/>
            <Route path="/carrito" element={ <Carrito/>}/>
            <Route path="/checkout" element={ <Checkout/>}/>
        </Routes>
<MiProvider>
    <Header/>
    <Main/>
</MiProvider>
        
        <Footer />
</BrowserRouter>
     

    ) ;
} ;
export default App ; 
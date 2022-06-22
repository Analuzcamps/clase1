import React from 'react' ;
import Header from './components/Header' ;
import ItemListContainer from './components/ItemListContainer';
import Main from './components/Main' ;
import Footer from './components/Footer';
import NavBar from './components/NavBar' ;
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route, } from 'react-router-dom'

const App = () => {
    return (
     
<BrowserRouter>
       <Header />
       <NavBar />
       <Routes>
        <Route path= '/' element ={<ItemListContainer/>}/>
        <Route/>
       </Routes>
       <Main />
       <Footer />
</BrowserRouter>
     

    ) ;
} ;
export default App ; 
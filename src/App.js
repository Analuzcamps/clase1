import React from 'react' ;
import Header from './components/Header' ;
import ItemListContainer from './components/ItemListContainer';
import Main from './components/Main' ;
import Footer from './components/Footer';
import NavBar from './components/NavBar' ;
import ItemCount from './components/ItemCount';

const App = () => {
    return (
     <>

       <Header />
       <NavBar />
       <>
      <ItemListContainer 
    greeting="Bienvenido al mundo del rodaje!" />
    <ItemCount/>

    </>
       <Main />
       <Footer />

     </>

    ) ;
} ;
export default App ; 
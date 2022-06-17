import React from 'react' ;
import Header from './components/Header' ;
import ItemListContainer from './components/ItemListContainer';
import Main from './components/Main' ;
import Footer from './components/Footer';
import NavBar from './components/NavBar' ;
import ItemDetailContainer from './components/ItemDetailContainer';

const App = () => {
    return (
     <>

       <Header />
       <NavBar />
       <>
      <ItemListContainer 
    greeting="Bienvenido al mundo del rodaje!" />
    </>
    <>
    <ItemDetailContainer/> 
    </>
       <Main />
       <Footer />

     </>

    ) ;
} ;
export default App ; 
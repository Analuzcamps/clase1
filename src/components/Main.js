import React from 'react' ;
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import { Routes, Route } from 'react-router-dom';


const Main =()=> {
  return(
    <main>
      <Routes>
        <Route path="/" element={<h1>HOME</h1>}/>
        <Route path="/category/:Id" element={ <ItemListContainer 
    greeting="Bienvenido al mundo del rodaje!" />}/>
    <Route path="/category/:Id" element={ <ItemDetailContainer/>}/>

        
      </Routes>
    </main>
  )
}

export default Main ;
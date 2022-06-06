import React from 'react' ; 
import CartWidget from './CartWidget' ; 


const NavBar = () => {
  return (

    <nav>
    <a href="#">Home</a>
    <a href="#">Locaciones</a>
    <a href="#">Cámaras</a>
    <a href="#">Accesorios</a>
    <a href="#">Contacto</a>

    <CartWidget/>
    

</nav>

  ) ;
} ;

export default NavBar ; 
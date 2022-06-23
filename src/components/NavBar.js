import React from 'react' ; 
import CartWidget from './CartWidget' ; 
import {NavLink} from 'react-router-dom'


const NavBar = () => {
  return (

    <nav>
<NavLink to="/">  Home </NavLink>
<NavLink to="/carrito"> Carrito</NavLink>
<NavLink to="/category/camara"> Cámaras</NavLink>
<NavLink to="/category/luz">Luces</NavLink>
<NavLink to="/category/micro"> Micrófonos</NavLink>
<NavLink to="/category/accesorio"> Accesorios</NavLink>

    <CartWidget/>
</nav>

  ) ;
} ;

export default NavBar ; 
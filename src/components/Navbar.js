import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='nav-bar'>
    <NavLink to="/noticias" className='nav-link'>Noticias</NavLink>
    <NavLink to="/novedades" className='nav-link'>Novedades</NavLink>
    <NavLink to="/notas" className='nav-link'>Notas de Interes</NavLink>
</nav>
  )
};

export default Navbar

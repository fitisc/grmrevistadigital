import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import '../css/navbar.css';
//import VDG from '../assets/valle del golf.jpg';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
  
    <nav id="navbar" className="navbar">
      <button
  classname="navbar-toggler"
  type="button"
  data-bs-toggle="offcanvas"
  data-bs-target="#offcanvasNavbar"
  aria-controls="offcanvasNavbar"
  aria-label="Toggle navigation"
>
  <span className="navbar-toggler-icon" />
</button>

        <ul>
          <li>
          <NavLink to="/" className='nav-link scrollto active'>Home </NavLink>
            
          </li>
          <li>
          <NavLink to="/noticias" className='nav-link scrollto'>Noticias</NavLink>
          </li>
          <li>
          <NavLink to="/novedades" className='nav-link scrollto'>Novedades</NavLink>
          </li>
          <li>
          <NavLink to="/notasInteres" className='nav-link scrollto'>Notas de Interes</NavLink>
          </li>
          <li>
          <NavLink to="/servicios" className='nav-link scrollto'>Servicios</NavLink>
          </li>
          
          <li>
          <NavLink to="https://wa.me/5493516697496" className="getstarted scrollto" rel='no noreferrer' target="_blank" >Escribinos </NavLink>
          </li>
          
        </ul>
        <MenuIcon className=" mobile-nav-toggle" />
      

        
    {/*<nav className='nav-bar'>
      <NavLink to="/" className='nav-link scrollto active'>Home </NavLink>
      <NavLink to="/noticias" className='nav-link scrollto'>Noticias</NavLink>
      <NavLink to="/novedades" className='nav-link scrollto'>Novedades</NavLink>
      <NavLink to="/notasInteres" className='nav-link scrollto'>Notas de Interes</NavLink>
      <NavLink to="/servicios" className='nav-link scrollto'>Servicios</NavLink>
      <NavLink to="https://wa.me/5493516697496" className="getstarted scrollto" rel='no noreferrer' target="_blank" >Escribinos </NavLink>
      <Outlet />
    </nav>
*/}
      <Outlet />
    </nav>
  )
};

export default Navbar

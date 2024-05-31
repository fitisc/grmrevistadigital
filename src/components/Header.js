import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
import VDG from '../assets/valle del golf.jpg';
const Header = () => {

  return (
    <header id="header" className='fixed-top'>
    <div className="container d-flex align-items-center justify-content-between justify-content-between">
        <Link to="/" className='logo' >
          <img src={VDG} width={50} height={30} className="img-fluid" alt='Logo valle del golf' />
          </Link> 
     
        
  
        
      <Navbar /> 
      </div> 
    </header>
  


  )
};

export default Header
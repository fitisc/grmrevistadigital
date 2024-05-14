import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header-container'>
      <Link to="*" >
        <h1 className='header-title'>Revista digital</h1> 
      </Link> 
        <Navbar />
    </header>
  )
};

export default Header
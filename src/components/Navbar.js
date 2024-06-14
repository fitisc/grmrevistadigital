import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import '../css/navbar.css';
import VDG from '../assets/valle del golf.jpg';

//</Container>import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
//import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

const NavBar = () => {
  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3 fixed-top">
          <Container fluid>
            <Navbar.Brand href="/">
              <Image src={VDG} width={50} height={30} fluid />
            </Navbar.Brand>
            <h1 className="text-dark-emphasis text-sm-center text-lg-center text-center">Revista Digital</h1>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Revista Informativa
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink to="/" className='nav-link scrollto active'>Home </NavLink>
                <NavLink to="/admin" className='nav-link scrollto'>Admin</NavLink>
            <NavLink to="/noticias" className='nav-link scrollto'>Noticias</NavLink>
            <NavLink to="/novedades" className='nav-link scrollto'>Novedades</NavLink>
            <NavLink to="/notasInteres" className='nav-link scrollto'>Notas de Interes</NavLink>
            <NavLink to="/servicios" className='nav-link scrollto'>Servicios</NavLink>
                </Nav>
               
                  <NavLink to="https://wa.me/5493516697496" className="getstarted scrollto" rel='no noreferrer' target="_blank" >Escribinos </NavLink>
            

              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      < Outlet />
    </>
  );
}

export default NavBar;
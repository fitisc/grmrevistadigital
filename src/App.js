import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
//import UserForm from './components/UserForm';
import Login from './components/Login';
//import Main from './components/Main';
import Novedades from './components/Novedades';
import Noticias from './components/Noticias';
import NotasInteres from './components/NotasInteres';
import Servicios from './components/Servicios'
import Header from './components/Header';
import Footer from './components/Footer';
import Admin from './admin/Admin';
import Home from './components/Home';

const App = () => {


  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element= {<Home />} ></Route>
      <Route path="/login" element= {<Login />} ></Route>
      <Route path="/admin" element= {<Admin />} ></Route>
      <Route path="/noticias" element= {<Noticias />} ></Route>
      <Route path="/novedades" element= {<Novedades />} ></Route>
      <Route path="/notasInteres" element= {<NotasInteres />} ></Route>
      <Route path="/servicios" element= {<Servicios />} ></Route>
    </Routes>
    <Footer />
    </>
   
  
     

   
  )
}

export default App;
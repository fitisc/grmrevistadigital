import React from 'react';
import Header from './components/Header';
//import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
//import UserForm from './components/UserForm';
import Login from './components/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Login />
     
      <Footer />

    </BrowserRouter>
  )
}

export default App;
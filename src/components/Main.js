import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Noticias from './Noticias';
import Novedades from './Novedades';
import NotasInteres from './NotasInteres';

const Main = () => {
  return (
    <div>
        
    <Routes>
        <Route path="*" element= {<Main />} ></Route>
        <Route path="noticias/:id" element= {<Noticias />} ></Route>
        <Route path="novedades/:id" element= {<Novedades />} ></Route>
        <Route path="notas/:id" element= {<NotasInteres />} ></Route>
    </Routes>
    </div>
  )
};

export default Main
import React from 'react'
import whatsapp from '../assets/whatsapp2.png';
import Muni from '../assets/Logo_Iso-color-e1701805181949-300x284.png';
import {Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
    <div className="whats-app my-float">
 <a href="https://wa.me/5493518585312" rel="no noreferrer" target="_blank">
   <img src= { whatsapp } className="w2" alt='whatsapp icon'/>
 </a>
</div>
    <h1 className='home-title'>Revista digital</h1>
     <h2>¡Bienvenido {}!</h2>
     
{/* ======= Hero Section ======= */}
<section>
<div className="card text-bg-dark">
<img src="https://imgar.zonapropcdn.com/avisos/1/00/51/56/28/81/1200x1200/1864040412.jpg?isFirstImage=true" className="card-img" alt="Noticia destacada" />
<div className="card-img-overlay">
 <h3 className="card-title">Noticia Destacada</h3>
 <p className="card-text">{}
   This is a wider card with supporting text below as a natural lead-in to
   additional content. This content is a little bit longer.
 </p>
 <p className="card-text">
   <small>{}Last updated 3 mins ago</small>
 </p>
 <Link to="/noticias"
         className="btn btn-warning"
         style={{ color: "#fff" }}
       >
         Detalles
  </Link>
</div>
</div>
</section>

    
{/* End Hero */}

<div className="row row-cols-1 row-cols-md-3 g-4">
<div className="col">
 <div className="card">
   <img src="..." className="card-img-top" alt="grm y asociados" />
   <div className="card-body">
     <h5 className="card-title">Administracion GRM y ASOCIADOS</h5>
     <p className="card-text">
       This is a longer card with supporting text below as a natural lead-in
       to additional content. This content is a little bit longer.
     </p>
     <a href="https://grmyasociados.com.ar/" rel='no noreferrer' target='_blank' className="btn btn-warning">Acceder</a>
   </div>
 </div>
</div>
<div className="col">
 <div className="card">
   <img src="https://vallegolfclub.com.ar/wp-content/uploads/2022/04/ValleGolfClub-Logo-2-1024x376.png" className="card-img-top w-75 vh-75 " alt="Valle Golf Club" />
   <div className="card-body">
     <h5 className="card-title">Valle Golf Club</h5>
     <p className="card-text">
       This is a longer card with supporting text below as a natural lead-in
       to additional content. This content is a little bit longer.
     </p>
     <a href="https://vallegolfclub.com.ar/" rel="no noreferrer" target='_blank' className="btn btn-warning">Acceder</a>
   </div>
 </div>
</div>
<div className="col">
 <div className="card">
   <img src= { Muni } className="card-img-top w-50 h-30" alt="Municipalidad Malagueño" />
   <div className="card-body">
     <h5 className="card-title">Municipalidad de Malagueño</h5>
     <p className="card-text">
       This is a longer card with supporting text below as a natural lead-in
       to additional content. This content is a little bit longer.
     </p>
     <a href="https://www.malagueno.gob.ar/" rel='no noreferrer' target='_blank' className="btn btn-warning">Acceder</a>
   </div>
 </div>
</div>

</div>

</div>

  )
}

export default Home
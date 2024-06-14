import React from 'react'
//import mascotas from '../assets/14213087_5452031.svg'
//import residuos from '../assets/22162212_488.svg';
//import sustentable from '../assets/7824979_3726694.svg';
import vecinos from '../assets/7915270_3777760.svg';
import whatsapp from '../assets/whatsapp2.png';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const NotasInteres = () => {
  return (
    <div>
      <section className='section'>
       <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="./NotasInteres.js" active>
        Notas de interes
        </Breadcrumb.Item>
        
      </Breadcrumb>
      <div className="whats-app my-float">
 <a href="https://wa.me/5493518585312" rel="no noreferrer" target="_blank">
   <img src= { whatsapp } className="w2" alt='whatsapp icon'/>
 </a>
</div>
      <section id="services" className="features section-bg">
  <div className="container">
    <div className="section-title">
      <h2 data-aos="fade-in">NOTAS DE INTERES</h2>
      <p data-aos="fade-in">
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
      </p>
    </div>
    
    <div className="row content">
      <div className="col-md-5 order-1 order-md-2" data-aos="fade-left">
        <img src={vecinos} className="img-fluid" alt="" />
      </div>
      <div className="col-md-7 pt-5 order-2 order-md-1" data-aos="fade-right">
        <h3>VECINOS</h3>
        <p className="fst-italic"
          //value= {notas.description}
          //onChange={handleNotasChange}
        >
          En esta área es prioritario el asesoramiento permanente y previo a
          cualquier conflicto, trabajando en permanente contacto con la empresa
          y especialmente con el área contable. <br />
          Los servicios a prestar son:
        </p>
        <ul>
          <li>
            <i className="bi bi-check" /> a) Asesoramiento preventivo
          </li>
          <li>
            <i className="bi bi-check" /> b) Contestación de telegramas
          </li>
          <li>
            <i className="bi bi-check" /> c) Defensas en sede administrativa y
            judicial
          </li>
          <li>
            <i className="bi bi-check" /> d) Negociaciones colectivas
          </li>
          <li>
            <i className="bi bi-check" /> e) Procedimientos preventivos de
            crisis
          </li>
          
        </ul>
        <p />
      </div>
    </div>
    
  </div>
</section>
</section>
    </div>
    
  )
}

export default NotasInteres
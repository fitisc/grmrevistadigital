import React from 'react'
//import mascotas from '../assets/14213087_5452031.svg'
//import residuos from '../assets/22162212_488.svg';
//import sustentable from '../assets/7824979_3726694.svg';
import vecinos from '../assets/7915270_3777760.svg';
import whatsapp from '../assets/whatsapp2.png';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link} from 'react-router-dom';
import '../css/notasInteres.css';
import Accordion from 'react-bootstrap/Accordion';

const NotasInteres = () => {
  return (
    <main className='section'>
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
      <h2  className='notas-title' data-aos="fade-in">NOTAS DE INTERES</h2>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nesciunt ratione laudantium corrupti facere dolorem voluptates. Sit, obcaecati vel odio facilis et, temporibus quisquam quasi neque ducimus saepe, vitae iste. <br />
          Los servicios son:
        </p>
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
       </div>
      
    </div>
    
  </div>
</section>

<div className="categorias-btn">
         
         <div className='eachcat'>
           <Link to="/novedades" className='first-btn'>
             <span>Novedades</span>
           </Link>
         </div>
        
         <div className='eachcat'>
           <Link to="/servicios" className='third-btn'>
             <span>Servicios</span>
           </Link>
         </div>
       
     </div>

    </main>
    
  )
}

export default NotasInteres
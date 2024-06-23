import React from 'react';
import whatsapp from '../assets/whatsapp2.png';
import grm from '../assets/logos/grm.png';
import Muni from '../assets/logos/muni.png';
import valleGolf from '../assets/logos/golf.png';
import { Link } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
//import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
//import ButtonGroup from 'react-bootstrap/ButtonGroup';
import luminarias from '../assets/luminarias_6.jpg';

const Home = () => {
  
  return (
    <div>
      <div className="whats-app my-float">
        <a href="https://wa.me/5493518585312" rel="noopener noreferrer" target="_blank">
          <img src={whatsapp} className="w2" alt='whatsapp icon' />
        </a>
      </div>
      <section className="section">
        <h2>¡Bienvenido {}!</h2>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        </Breadcrumb>
        <div className="card text-bg-light banner m-3">
          <img src={ luminarias } className="card-img" alt="Noticia destacada" />
          <div className="card-img-overlay">
            <h3 className="card-title text-light">Noticia Destacada</h3>
            <p className="card-text text-light">Reparaciones en luminarias</p>
            <Link to="/noticias" className="btn btn-warning" style={{ color: "#fff" }}>
              Mas info
            </Link>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-3 p-3 w-75 h-75">
          <Card className="col p-8 border double 2px #eee">
            <a href="https://grmyasociados.com.ar/" rel="noopener noreferrer" target="_blank">
            <img src={grm} className="img-fluid" alt="grm y asociados" />
            </a>
          </Card>
          <Card className="col border double 2px #eee">
            <a href="https://vallegolfclub.com.ar/" rel="noopener noreferrer" target="_blank">
            <img src={valleGolf} className="img-fluid" alt="Valle Golf Club" />
            </a>
          </Card>
          <Card className="col border double 2px #eee">
            <a href="https://www.malagueno.gob.ar/" rel="noopener noreferrer" target="_blank">
            <img src={Muni} className="img-fluid" alt="Municipalidad Malagueño" />
            </a>
          </Card>
        </div>  


        <div className="categorias-btn">
         
            <div className='eachcat'>
              <Link to="/novedades" className='first-btn'>
                <span>Novedades</span>
              </Link>
            </div>
            <div className='eachcat'>
              <Link to="/notasInteres" className='second-btn'>
                <span className='second-title'>Notas de Interes</span>
              </Link>
            </div>
            <div className='eachcat'>
              <Link to="/servicios" className='third-btn'>
                <span>Servicios</span>
              </Link>
            </div>
          
        </div>
      </section>
    </div>
  );
};

export default Home;

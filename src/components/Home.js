import React from 'react'
import whatsapp from '../assets/whatsapp2.png';
import Muni from '../assets/Logo_Iso-color-e1701805181949-300x284.png';
import valleGolf from '../assets/logo valle del golf club.png';
import {Link } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const Home = () => {
  return (
    <div>
      <div className="whats-app my-float">
        <a href="https://wa.me/5493518585312" rel="no noreferrer" target="_blank">
        <img src= { whatsapp } className="w2" alt='whatsapp icon'/>
        </a>
      </div>
      <section className="section" >
      <h2>¡Bienvenido {}!</h2>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        
      </Breadcrumb>  
{/* ======= Hero Section ======= */}
      
        <div className=" card text-bg-dark banner mb-3  ">
          <img src="https://imgar.zonapropcdn.com/avisos/1/00/51/56/28/81/1200x1200/1864040412.jpg?isFirstImage=true" className="card-img" alt="Noticia destacada" />
          <div className="card-img-overlay">
            <h3 className="card-title">Noticia Destacada</h3>
            <p className="card-text">{}
            This is a wider card with supporting
            </p>
            <Link to="/noticias"
            className="btn btn-warning"
            style={{ color: "#fff" }}
            >
            Detalles
            </Link>
          </div>
        </div>


    
{/* End Hero */}

      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card">
            <img src="..." className="card-img-top" alt="grm y asociados" />
            <div className="card-body">
            <h5 className="card-title">GRM y ASOCIADOS</h5>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dignissimos fuga cum eos nisi in doloribus perferendis.
            </p>
            <a href="https://grmyasociados.com.ar/" rel='no noreferrer' target='_blank' className="btn btn-warning">Acceder</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={valleGolf} className="card-img-top w-75 vh-75 " alt="Valle Golf Club" />
            <div className="card-body">
            <h5 className="card-title"> </h5>
            <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate quae vel perferendis velit beatae ut, repudiandae
            </p>
            <a href="https://vallegolfclub.com.ar/" rel="no noreferrer" target='_blank' className="btn btn-warning">Acceder</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src= { Muni } className="card-img-top w-50 h-30" alt="Municipalidad Malagueño" />
            <div className="card-body">
            <h5 className="card-title">MUNICIPALIDAD DE MALAGUEÑO</h5>
            <p className="card-text">
            </p>
            <a href="https://www.malagueno.gob.ar/" rel='no noreferrer' target='_blank' className="btn btn-warning">Acceder</a>
            </div>
          </div>
        </div>

      </div>
      
      <div className="categorias-btn fixed-bottom w-100" >
      <ButtonGroup vertical size='lg'>
        <div className='eachcat'>
          <Button className='first-btn d-grid gap-2'>
            <span>Novedades</span>
          </Button>  
        </div>
        <div className='eachcat'>
          <Button className='second-btn d-grid gap-2 w-100' size="lg">
            <span>Notas de Interes</span>
          </Button>  
        </div>
        <div className='eachcat'>
          <Button className='third-btn d-grid gap-2'>
            <span>Servicios</span>
          </Button>  
        </div>
        </ButtonGroup>
      </div>
    </section>
  </div>

  )
}

export default Home
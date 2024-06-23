import React from 'react'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { BusinessCenterOutlined } from '@mui/icons-material';
import EngineeringIcon from '@mui/icons-material/Engineering';
import whatsapp from '../assets/whatsapp2.png';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';
import '../css/novedades.css';
const Novedades = () => {

  //const [novedad, setNovedad] = useState('')


  //const handleNovedadChange = (e) => {
    //setNovedad( {...novedad, description: e.target.value})
 // }

  return (
    <div>
      <div className="whats-app my-float">
        <a href="https://wa.me/5493518585312" rel="no noreferrer" target="_blank">
          <img src= { whatsapp } className="w2" alt='whatsapp icon'/>
        </a>
      </div>
      <section className='section'>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="./Novedades.js" active>
            Novedades
          </Breadcrumb.Item>
        
        </Breadcrumb>
      <section className="about section-bg">
      <div className="container">
      <section id="services" />
        <div className="row gy-4">
          <div className="col-12">
            <div className="content d-flex flex-column justify-content-center ps-0 ps-xl-4">
              <div className="section-title text-center">
                <h2 className='novedades-title' data-aos="fade-right"> NOVEDADES </h2>
                
                <p className="text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non animi possimus deleniti ipsum a fuga. Expedita, voluptatem.
                </p>
              </div>
            
              <div className="content pt-5">
                <div className="row">
                  <div className="col-sm-4 mb-3 mb-sm-0">
                    <div
                      className="card d-flex"
                      data-aos="fade-right"
                      style={{ marginBottom: "2rem" }}
                    >
                    <div className="card-body  text-center">
                      <BusinessCenterOutlined
                      style={{ color: "#779216", fontSize: 48 }}
                      />
                    <h4
                      className="card-title"
                      style={{ textTransform: "uppercase" }}
                    >
                    <b>Intendencia</b>
                    </h4>
                    <p className="card-text"
                     //value= {novedad.description}
                     //onChange={handleNovedadChange}
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel earum aperiam, repellat debitis, hic ipsum ab deserunt et magnam temporibus culpa perspiciatis voluptatem, adipisci repellendus quisquam! Reprehenderit minus sit accusantium?
                    </p>
                  </div>
                </div>
              </div>
            
              <div className="col-sm-4 mb-3 mb-sm-0">
                <div
                  className="card d-flex"
                  data-aos="fade-right"
                  style={{ marginBottom: "2rem" }}
                >
                  <div className="card-body text-center ">
                    <VerifiedUserIcon
                       style={{ color:"#779216", fontSize: 48}} 
                     />
                    
                    <h4
                      className="card-title"
                      style={{ textTransform: "uppercase" }}
                    >
                      <b>SEGURIDAD</b>
                    </h4>
                    <p className="card-text"
                       //value= {seguridad.description}
                     //onChange={handleSeguridadChange}
                    >
                      
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ab, quam saepe vitae pariatur dicta, earum recusandae perspiciatis iusto odio blanditiis nisi necessitatibus quis adipisci libero quisquam modi eveniet. Reiciendis!
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-4 mb-3 mb-sm-0">
                <div
                  className="card d-flex"
                  data-aos="fade-right"
                  style={{ marginBottom: "2rem" }}
                >
                  <div className="card-body text-center">
                    <EngineeringIcon
                      style={{ color: "#779216", fontSize: 48 }}
                    />
                    <h4
                      className="card-title"
                      style={{ textTransform: "uppercase" }}
                    >
                      <b>Control Obras</b>
                    </h4>
                    <p className="card-text"
                       //value= {controlobra.description}
                     //onChange={handleControlObraChange}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quasi est consequuntur. Sit reprehenderit temporibus assumenda voluptatem esse illum ipsa commodi iusto, ex, non, sunt officia? At accusantium tenetur doloribus?
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</section>

<div className="categorias-btn">
         
        
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
  )
}

export default Novedades
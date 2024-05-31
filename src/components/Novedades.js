import React from 'react'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { BusinessCenterOutlined } from '@mui/icons-material';
import EngineeringIcon from '@mui/icons-material/Engineering';
import whatsapp from '../assets/whatsapp2.png';


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

      <section className="about section-bg">
      <div className="container">
      <section id="services" />
        <div className="row gy-4">
          <div className="col-12">
            <div className="content d-flex flex-column justify-content-center ps-0 ps-xl-4">
              <div className="section-title">
                <h2 data-aos="fade-right"> NOVEDADES </h2>
                <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non animi possimus deleniti ipsum a fuga. Expedita, voluptatem. Ratione magni soluta nesciunt debitis, magnam, amet quis delectus, minus adipisci iste distinctio.
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
                  <div className="card-body ">
                    <BusinessCenterOutlined
                      style={{ color: "#D36835", fontSize: 48 }}
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
                  <div className="card-body ">
                    <VerifiedUserIcon
                       style={{ color:"#D36835", fontSize: 48}} 
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
                  <div className="card-body ">
                    <EngineeringIcon
                      style={{ color: "#D36835", fontSize: 48 }}
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


    </div>
  )
}

export default Novedades
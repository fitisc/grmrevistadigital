import React from 'react';
import '../css/servicios.css';
import whatsapp from '../assets/whatsapp2.png';
import vecinos from '../assets/2306.i602.009.S.m009.c12.neighbor people flat illustration.jpg';
import EngineeringIcon from '@mui/icons-material/Engineering';
import TungstenIcon from '@mui/icons-material/Tungsten';
import YardIcon from '@mui/icons-material/Yard';
import BuildIcon from '@mui/icons-material/Build';
function Servicios() {
  return (
    <>
    <div className="whats-app my-float">
      <a href="https://wa.me/5493518585312" rel="no noreferrer" target="_blank">
        <img src= { whatsapp } className="w2" alt='whatsapp icon'/>
      </a>
    </div>
    
    <section id="features" className="features">
      <div className="section-title">
        <h2 data-aos="fade-right"> SERVICIOS </h2>
        <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non animi possimus deleniti ipsum a fuga. Expedita, voluptatem. Ratione magni soluta nesciunt debitis, magnam, amet quis delectus, minus adipisci iste distinctio.
        </p>
      </div>
      <div className="container aos-init aos-animate" data-aos="fade-up">
        <ul className="nav nav-tabs row d-flex" role="tablist">
          <li className="nav-item col-3" role='presentation' >
            <a
              className="nav-link active show"
              data-bs-toggle="tab"
              href="#tab-1"
            >
              <EngineeringIcon/>
              <h4 className="d-none d-lg-block">Gasistas y Plomeros</h4>
            </a>
          </li>
          <li className="nav-item col-3">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-2" aria-selected="false" role="tab" tabindex="-1">
              
              <TungstenIcon  />
              <h4 className="d-none d-lg-block">Electricistas</h4>
            </a>
          </li>
          <li className="nav-item col-3">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-3" aria-selected="false" role="tab" tabindex="-1">
            
              <YardIcon />
              <h4 className="d-none d-lg-block">Jardineros</h4>
            </a>
          </li>
          <li className="nav-item col-3">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-4" aria-selected="false" role="tab" tabindex="-1">
              
              <BuildIcon />
              <h4 className="d-none d-lg-block">Arreglos del Hogar</h4>
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane active show" id="tab-1">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>
                  Voluptatem dignissimos provident quasi corporis voluptates sit
                  assumenda.
                </h3>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul>
                  <li>
                    <i className="ri-check-double-line" /> Ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    <i className="ri-check-double-line" /> Duis aute irure dolor
                    in reprehenderit in voluptate velit.
                  </li>
                  <li>
                    <i className="ri-check-double-line" /> Ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate trideta storacalaperda mastiro
                    dolore eu fugiat nulla pariatur.
                  </li>
                </ul>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum
                </p>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img
                  src={vecinos}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="tab-pane" id="tab-2">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>
                  Neque exercitationem debitis soluta quos debitis quo mollitia
                  officia est
                </h3>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum
                </p>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul>
                  <li>
                    <i className="ri-check-double-line" /> Ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    <i className="ri-check-double-line" /> Duis aute irure dolor
                    in reprehenderit in voluptate velit.
                  </li>
                  <li>
                    <i className="ri-check-double-line" /> Provident mollitia
                    neque rerum asperiores dolores quos qui a. Ipsum neque dolor
                    voluptate nisi sed.
                  </li>
                  <li>
                    <i className="ri-check-double-line" /> Ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate trideta storacalaperda mastiro
                    dolore eu fugiat nulla pariatur.
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img
                  src="assets/img/features-2.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="tab-pane" id="tab-3">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>
                  Voluptatibus commodi ut accusamus ea repudiandae ut autem dolor
                  ut assumenda
                </h3>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum
                </p>
                <ul>
                  <li>
                    <i className="ri-check-double-line" /> Ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    <i className="ri-check-double-line" /> Duis aute irure dolor
                    in reprehenderit in voluptate velit.
                  </li>
                  <li>
                    <i className="ri-check-double-line" /> Provident mollitia
                    neque rerum asperiores dolores quos qui a. Ipsum neque dolor
                    voluptate nisi sed.
                  </li>
                </ul>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img
                  src="assets/img/features-3.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="tab-pane" id="tab-4">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>
                  Omnis fugiat ea explicabo sunt dolorum asperiores sequi
                  inventore rerum
                </h3>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum
                </p>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul>
                  <li>
                    <i className="ri-check-double-line" /> Ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    <i className="ri-check-double-line" /> Duis aute irure dolor
                    in reprehenderit in voluptate velit.
                  </li>
                  <li>
                    <i className="ri-check-double-line" /> Ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate trideta storacalaperda mastiro
                    dolore eu fugiat nulla pariatur.
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img
                  src="assets/img/features-4.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Features Section */}
  </>
  
  );
}


export default Servicios
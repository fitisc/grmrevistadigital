import React from 'react';

const Nosotros = () => {

    return(
<div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="">
              <h3>Valle del Golf br Country</h3>
              <p>
                A108 Adam Street <br />
                NY 535022, USA
                <br />
                <br />
                <strong>Phone:</strong> +1 5589 55488 55
                <br />
                <strong>Email:</strong> info@example.com
                <br />
              </p>
              <div className="social-links mt-3">
               
                <Link to="#" className="facebook">
                  <i className="bx bxl-facebook" />
                </Link>
                <Link to="#" className="instagram">
                  <i className="bx bxl-instagram" />
                </Link>
               
                <Link to="#" className="linkedin">
                  <i className="bx bxl-linkedin" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4>Presidente</h4>
            <ul>
              <li>
                <span>Fabian Alberto Maidana</span>
              </li>
              </ul>

              <h4>Vicepresidente</h4>
              <ul>
              <li>
                <span>Juan Echegaray De Maussión</span>
              </li>
              </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h4>Drectores Titulares</h4>
            <ul>
              <li>
                <span>Federico del Boca</span>
              </li>
              <li>
                <span>Gerardo Milanesio</span>
              </li>
              <li>
                <span>Andrea Vissani</span>
              </li>
            
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4>Administración</h4>
            <ul>
              <li>
                <span>Guillermo Ramos Mexía</span>
              </li>
              </ul>
              <h4>Control de Obras</h4>
              <ul>
             
              <li>
                <span>Sabrina Cataldo</span>
              </li>
              
              
            </ul>
          </div>
          
        </div>
      </div>
    )
}
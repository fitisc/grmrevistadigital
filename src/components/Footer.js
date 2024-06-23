import React from 'react';
import '../css/footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <>
  {/* ======= Footer ======= */}
  <footer id="footer">
    <div className="footer-top">
      
    </div>
    <div className="container">
      <div className="copyright">
         All Rights Reserved
      </div>
      <div className="credits">
        {/* All the links in the footer should remain intact. */}
        {/* You can delete the links only if you purchased the pro version. */}
        {/* Licensing information: https://bootstrapmade.com/license/ */}
        {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/dewi-free-multi-purpose-html-template/ */}
        Designed by <Link to="https://pep.com.ar"  rel="noopener noreferrer" target="_blank" >Pep Solutions</Link>
      </div>
    </div>
  </footer>
  {/* End Footer */}
  <div id="preloader" />
  <Link to="#"
    className="back-to-top d-flex align-items-center justify-content-center"
  >
    <i className="bi bi-arrow-up-short" />
  </Link>
</>

    
    </>
  )
};

export default Footer
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
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="footer-info">
              <h3>Valle del Golf Country</h3>
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
                <Link to="#" className="twitter">
                  <i className="bx bxl-twitter" />
                </Link>
                <Link to="#" className="facebook">
                  <i className="bx bxl-facebook" />
                </Link>
                <Link to="#" className="instagram">
                  <i className="bx bxl-instagram" />
                </Link>
                <Link to="#" className="google-plus">
                  <i className="bx bxl-skype" />
                </Link>
                <Link to="#" className="linkedin">
                  <i className="bx bxl-linkedin" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <i className="bx bx-chevron-right" /> <Link to="#">Home</Link>
              </li>
              <li>
                <i className="bx bx-chevron-right" /> <Link to="#">About us</Link>
              </li>
              <li>
                <i className="bx bx-chevron-right" /> <Link to="#">Services</Link>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <Link to="#">Terms of service</Link>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <Link to="#">Privacy policy</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>
                <i className="bx bx-chevron-right" /> <Link to="#">Web Design</Link>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <Link to="#">Web Development</Link>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <Link to="#">Product Management</Link>
              </li>
              <li>
                <i className="bx bx-chevron-right" /> <Link to="#">Marketing</Link>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <Link to="#">Graphic Design</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>
              Tamen quem nulla quae legam multos aute sint culpa legam noster
              magna
            </p>
            
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="copyright">
        © Copyright{" "}
        <strong>
          <span>Dewi</span>
        </strong>
        . All Rights Reserved
      </div>
      <div className="credits">
        {/* All the links in the footer should remain intact. */}
        {/* You can delete the links only if you purchased the pro version. */}
        {/* Licensing information: https://bootstrapmade.com/license/ */}
        {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/dewi-free-multi-purpose-html-template/ */}
        Designed by <Link to="https://bootstrapmade.com/">BootstrapMade</Link>
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
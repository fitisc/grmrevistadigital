import React from 'react';
import whatsapp from '../assets/whatsapp2.png';

const Noticias = () => {
  return (
    <div>
      <div className="whats-app my-float">
        <a href="https://wa.me/5493518585312" rel="no noreferrer" target="_blank">
          <img src= { whatsapp } className="w2" alt='whatsapp icon'/>
        </a>

        <div className="section-title">
                <h2 data-aos="fade-right"> NOTICIAS DESTACADAS </h2>
                <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non animi possimus deleniti ipsum a fuga. Expedita, voluptatem. Ratione magni soluta nesciunt debitis, magnam, amet quis delectus, minus adipisci iste distinctio.
                </p>
              </div>
      </div>
    </div>
  )
}

export default Noticias
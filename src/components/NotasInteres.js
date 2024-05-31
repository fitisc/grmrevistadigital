import React from 'react'
import mascotas from '../assets/14213087_5452031.svg'
import residuos from '../assets/22162212_488.svg';
import sustentable from '../assets/7824979_3726694.svg';
import vecinos from '../assets/7915270_3777760.svg';
import whatsapp from '../assets/whatsapp2.png';

const NotasInteres = () => {
  return (
    <div>
      <div className="whats-app my-float">
 <a href="https://wa.me/5493518585312" rel="no noreferrer" target="_blank">
   <img src= { whatsapp } className="w2" alt='whatsapp icon'/>
 </a>
</div>
      <section id="services" className="features section-bg">
  <div className="container">
    <div className="section-title">
      <h2 data-aos="fade-in">NOTAS DE INTERES</h2>
      <p data-aos="fade-in">
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum necessitatibus adipisci cumque nam optio consequatur obcaecati delectus reprehenderit eveniet, ipsa aspernatur tenetur aperiam facilis commodi eum totam rerum ex tempora.
      </p>
    </div>
    <div className="row content">
      <div className="col-md-5" data-aos="fade-right">
        <img src={sustentable} className="img-fluid" alt="" />
      </div>
      <div className="col-md-7 pt-4" data-aos="fade-left">
        <h3>ECONOMIA SUSTENTABLE</h3>
        <p className="fst-italic"
           //value= {notas.description}
          //onChange={handleNotasChange}
        >
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quidem perferendis repellendus ullam modi, dicta at, suscipit aliquam exercitationem, iste placeat vel a aut ducimus accusamus sed quisquam cupiditate. Amet?
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatem commodi odit! Et excepturi quisquam corporis! Ducimus facere ut dolorum natus suscipit! Harum itaque minima nemo temporibus consectetur ratione voluptatem?
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, mollitia suscipit maxime necessitatibus praesentium asperiores facere, at, corrupti repudiandae quo fugiat distinctio accusamus officia in consequatur ipsum quidem ab. Delectus!
        </p>
      </div>
    </div>
    <div className="row content">
      <div className="col-md-5 order-1 order-md-2" data-aos="fade-left">
        <img src={mascotas} className="img-fluid" alt="mascotas" />
      </div>
      <div className="col-md-7 pt-5 order-2 order-md-1" data-aos="fade-right">
        <h3>NUESTRAS MASCOTAS</h3>
        <p className="fst-italic"
          //value= {notas.description}
          //onChange={handleNotasChange} 
          >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis impedit veritatis, consequuntur itaque pariatur eius quod optio numquam reprehenderit esse magni earum nisi maiores adipisci a! Explicabo laudantium quibusdam architecto.
          <br />
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident a itaque, repudiandae consequuntur optio quidem nobis aliquam quod deserunt ullam eaque? Impedit quibusdam doloribus mollitia cum maiores praesentium harum ab?
        </p>
      </div>
    </div>
    <div className="row content">
      <div className="col-md-5" data-aos="fade-right">
        <img src={residuos} className="img-fluid" alt="" />
      </div>
      <div className="col-md-7 pt-5" data-aos="fade-left">
        <h3>RECOLECCION DE RESIDUOS</h3>
        <p 
          //value= {notas.description}
          //onChange={handleNotasChange}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo repellendus libero itaque debitis dolor quisquam quidem cum maiores, voluptate quia nam et quam omnis vel recusandae, nostrum aut provident sapiente?
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa doloremque, facere odit asperiores est quod nam consequuntur excepturi veniam nulla esse, dicta totam accusantium, sequi placeat non quibusdam nobis. Dolorum.
          <ul>
          <li>
            <i className="bi bi-check" /> a) Asesoramiento preventivo
          </li>
          <li>
            <i className="bi bi-check" /> b) Contestación de telegramas
          </li>
          <li>
            <i className="bi bi-check" /> c) Defensas en sede administrativa y
            judicial
          </li>
          <li>
            <i className="bi bi-check" /> d) Negociaciones colectivas
          </li>
          <li>
            <i className="bi bi-check" /> e) Procedimientos preventivos de
            crisis
          </li>
          <li>
            <i className="bi bi-check" /> f) cualquier otra controversia que
            deba dirimirse en el fuero laboral
          </li>
        </ul>
        </p>
      </div>
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
          En esta área es prioritario el asesoramiento permanente y previo a
          cualquier conflicto, trabajando en permanente contacto con la empresa
          y especialmente con el área contable. <br />
          Los servicios a prestar son:
        </p>
        <ul>
          <li>
            <i className="bi bi-check" /> a) Asesoramiento preventivo
          </li>
          <li>
            <i className="bi bi-check" /> b) Contestación de telegramas
          </li>
          <li>
            <i className="bi bi-check" /> c) Defensas en sede administrativa y
            judicial
          </li>
          <li>
            <i className="bi bi-check" /> d) Negociaciones colectivas
          </li>
          <li>
            <i className="bi bi-check" /> e) Procedimientos preventivos de
            crisis
          </li>
          
        </ul>
        <p />
      </div>
    </div>
    
  </div>
</section>
    
    </div>
  )
}

export default NotasInteres
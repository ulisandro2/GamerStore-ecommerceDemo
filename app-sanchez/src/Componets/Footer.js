import React from 'react'
import '../Componets/css/StyleFooter.css'


const Footer = () => {
  return (
    <div>
      <footer>
    <div id="contacto" className="content">

      <h1 className="logo">Contacta<span>Nos
        </span>
      </h1>

      <div className="contact-wrapper animated bounceInUp">
        <div className="contact-form">
          <h3>Contacto</h3>
          <form action="">
            <p>
              <label>Nombre Completo
              </label>
              <input type="text" name="fullname"/>
            </p>
            <p>
              <label>Email
              </label>
              <input type="email" name="email"/>
            </p>
            <p>
              <label>Numero Telefonico</label>
              <input type="tel" name="phone"/>
            </p>
            <p>
              <label>Empresa</label>
              <input type="text" name="Empresa"/>
            </p>
            <p className="block">
              <label>Mensaje</label>
              <textarea name="message" rows="3"></textarea>
            </p>
            <p className="block">
              <button>
                Enviar
              </button>
            </p>
          </form>
        </div>
        <div className="contact-info">
          <h4>Mas Info</h4>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              GamerStore
            </li>
            <li>
              <i className="fas fa-phone"></i>
              (+54) 11 51399129
            </li>
            <li>
              <i className="fas fa-envelope-open-text"></i>
              contactGamerStore@gmail.com
            </li>
          </ul>
          <p>Ig: GamerStore-Arg
          </p>
          <p>GamerStore.com</p>
          <small>&copy; 2022 <b>Uli</b> -Todos los Derechos Reservados</small>
        </div>
      </div>

    </div>


  </footer>
      
    </div>
  )
}

export default Footer

import React from 'react'
import Image from 'next/image'
import logo from '../assets/img/logo-odissy.svg' 

export default function Footer() {
  return (
    <section className="footer__section">
      <div className="container center">
        <div className="footer__company">
          <Image className="logo__paralel" width='90' src={logo} alt='Logotype paralel' />
          <div className="footer__company-info">
            <span>443 238 2668</span>
            <span>hola@byodissy.com</span>
            <span>Morelia, México</span>
          </div>
        </div>
        <div className="footer__columns">
          <div className="footer__menu">
              <span>Menú</span>
              <a href='/#services'>Servicios</a>
              <a href='/#projects'>Proyectos</a>
              <a href='/#about'>Nosotros</a>
              <a href='/#contact'>Contacto</a>
          </div>

          <div className="footer__networks"> 
              <span>Redes</span>

              <a href='https://www.linkedin.com/company/paralel-agency/about/' target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href='' target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href='' target="_blank" rel="noopener noreferrer">Behance</a>
              <a href='https://dribbble.com/Paralel' target="_blank" rel="noopener noreferrer">Dribbble</a>
          </div>
        </div>

      </div>
      <div className="footer__copy-politics">
        <p>© 2023 Odissy. All rights reserved.</p>
        <a href="">Políticas de privacidad</a>
      </div>
    </section>
  )
}

import React from 'react'
import Image from 'next/image'
import logo from '../assets/img/SalDev-01.svg' 
import Link from 'next/link'

export default function Footer() {
  return (
    <section className="footer__section">
      <div className="container center">
        <div className="footer__company">
          <Link href="/"> 
            <Image className="logo__odissy" width='90' src={logo} alt='Logotype SalvaDev' />
          </Link> 

          <div className="footer__company-info">
            <span>443 238 2668</span>
            <span>salsanzmelc@gmail.com</span>
          </div>
        </div>
        <div className="footer__columns">
          <div className="footer__menu">
              <span>Menú</span>
              <Link href='/#skills'>Habilidades</Link>
              <Link href='/#projects'>Proyectos</Link>
              <Link href='/#about'>Sobre mí</Link>
              <Link href='/#contact'>Contacto</Link>
          </div>

          <div className="footer__networks"> 
              <span>Redes</span>

              <a href='https://linkedin.com/in/salvador-sánchez-94b251237' target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href='https://github.com/SalvasDev' target="_blank" rel="noopener noreferrer">Github</a>
              <a href='https://www.behance.net/SALVADOR_SANCHEZ' target="_blank" rel="noopener noreferrer">Behance</a>
              <a href='https://dribbble.com/Salvadorsanchez' target="_blank" rel="noopener noreferrer">Dribbble</a>
          </div>
        </div>

      </div>
      <div className="footer__copy-politics">
      </div>
    </section>
  )
}

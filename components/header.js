import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import logo from '../assets/img/logo-odissy.svg'
import lightMode from '../assets/img/light-mode.svg'
import darkMode from '../assets/img/dark-mode.svg'
import localFont from '@next/font/local'
import { isUsingDarkMode } from '../helpers/isUsingDarkMode'
import { setColorSchemeToLS } from '../helpers/setColorSchemeToLS'
import { getColorSchemeFromLS } from '../helpers/getColorSchemeFromLS'
import { burgerBtn } from '../helpers/burgerBtn'
import Link from 'next/link'
import { positionAnchor } from '../helpers/positionAnchor'

const avertaReg = localFont({src:'../assets/fonts/Averta-Regular.woff'})


export default function Header() {

  const [checked, setChecked] = useState(false)

    const handleBurger = () => {
      burgerBtn()
    }


    useEffect(() => {

      positionAnchor()

      isUsingDarkMode()        
      setChecked(isUsingDarkMode()) 

      var bodyElement = document.querySelector('body')
      let colorSheme = getColorSchemeFromLS()

      if(!colorSheme) return
      if(colorSheme === 'light') {        
        bodyElement.classList.add('force-light')
        setChecked(false)
      } else {
        bodyElement.classList.add('force-dark')   
        setChecked(true)     
      } 
    }, []) 

 
    const changeTheme = () => {
      var bodyElement = document.querySelector('body')
      if(checked === false) {
        bodyElement.classList.remove('force-light')
        bodyElement.classList.add('force-dark') 
        setColorSchemeToLS('dark')
        setChecked(true)      
      } else {
        bodyElement.classList.remove('force-dark')       
        bodyElement.classList.add('force-light') 
        setColorSchemeToLS('light')      
        setChecked(false)
      }
    }
     

  return (
    <div className={avertaReg.className}>
      {/* Fondo del menú */}
      <div className="menu__bg" id='menu__bg'></div>

      {/* Header section */}
      <section className="header__section center" id='start'>      

        <a href="/"> 
          <div className="logo">
            <Image className="logo__paralel" width='90' src={logo} alt='Logotype paralel' />
          </div>
        </a>

        <div className="main__menu">
          <p className="menu__title">menú</p>

          {/* burger menu */}
          <div className='menu__container' id='menu__container'>
            <button 
                className="btn-burg" 
                id="btn-burg"
                onClick={handleBurger}
            >
              <div className="line1__btn-burg"></div>
              <div className="line2__btn-burg"></div>
              <div className="line3__btn-burg"></div>
            </button>
          </div>
        </div>

         {/* Menu mobile */}
        <nav className="showMenuMobile " id='showMenuMobile' onClick={handleBurger}>
          <a  href='/' className="animate__animated animate__slideInDown">Inicio</a>
          <a  href="/#services"className="animate__animated animate__slideInDown">Servicios</a>
          <a  href="/#projects"className="animate__animated animate__slideInDown">Proyectos</a>
          <a href="/#about"className="animate__animated animate__slideInDown">Nosotros</a>
          <a  href="/#contact"className="animate__animated animate__slideInDown">Contacto</a>
        </nav>
        
        {/* Theme lets talk group */}
          <div className="dark-mode-controls">            
            <Image className="icon" width='25' src={lightMode} alt='Icon light mode' />
            <input 
              type="checkbox" 
              name="dark-toggle" 
              id="dark-toggle"
              className="dark-toggle"
              checked ={checked}
              onChange={changeTheme} 
            />
            <label htmlFor="dark-toggle"></label>
            <Image className="icon" width='25' src={darkMode} alt='Icon dark mode' />
          </div>
      </section>
    </div>
  )
}

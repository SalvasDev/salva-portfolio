import React from 'react'
import arrow from '../assets/img/arrow.svg'
import Image from 'next/image'
import localFont from '@next/font/local'
import gradients from '../assets/img/gradients-shape.png'

const avertaBold = localFont({src:'../assets/fonts/Averta-Bold.woff'})
const avertaReg = localFont({src:'../assets/fonts/Averta-Regular.woff'})

export default function Hero() {
  return (
    <div className={avertaBold.className}>
      <section className="hero__section container center"> 
        <div className="hero__contain">
          <h1 className="main__title animate__animated animate__fadeInUp" >Web & Branding</h1>
          <h2 className={`main__subtitle animate__animated animate__fadeInUp ${avertaReg.className}`}>Diseño y desarrollo web</h2> 
          <a href="#contact"><button className="btn__talk animate__animated animate__fadeInUp">Hablemos</button></a>
          <a href="#services"><Image className="icon arrow animate__animated animate__fadeInUp" width='100' src={arrow} alt='arrow'/></a>                         
        </div>
      </section>
      <Image className="hero__gradients" width='800' src={gradients} alt='gradients' />                        
    </div>
  )
}

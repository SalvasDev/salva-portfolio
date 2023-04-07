import React from 'react'
import Image from 'next/image'
import usImg from '../assets/img/us-img.jpg'

export default function About() {
  return (
    <section className="about__section animate__animated animate__fadeInUp" id='about'>      
      <div className="about__container">
        <Image className="about__img" height= '900' src={usImg} alt='Branding image' />                            
        <div className="about__text" id='ind__three'>
          <h2 className="about__title"><span>03 </span>Sobre mí</h2>
          <p>Como desarrollador Frontend, he adquirido habilidades en diferentes áreas: desde la planificación y el diseño hasta la codificación y la implementación.<br/><br/> 
             La capacidad de aprendizaje y adaptación al cambio, combinado con la experiencia en proyectos personales y la habilidad para trabajar en equipo, me hacen un desarrollador Frontend valioso y altamente prometedor para cualquier empresa.<br/><br/> 
          </p>
          <div className="decora__text"></div>
        </div>
      </div>
    </section>
  )
}

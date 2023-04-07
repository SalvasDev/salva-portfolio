import React, { useState } from 'react'
import Gallery from './gallery'
import 'animate.css'


export default function Projects() {
  const [ typeGallery, setTypeGallery ] = useState('todo')

  const handleGallery = (e, typeGal) =>{
    e.preventDefault()
    setTypeGallery(typeGal)
  }

  var bgColor = '#20EEE2' 
  var borderColor = bgColor
  var color = 'black'

  return (
    <section className="projects__section animate__animated animate__fadeInUp" id='projects'>
      <div className='projects__container center' id='ind__two'>
        
        <div className="projects__header">
          <h2 className="projects__title"><span>02 </span>Proyectos</h2>                   
        </div>

      </div>
      <div className="projects__gallery center">
         <Gallery 
         typeGallery = {typeGallery}
         />
      </div>
    </section>
  )
}

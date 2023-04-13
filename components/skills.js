import React from 'react'
import Image from 'next/image'
import skillsImg from '../assets/img/laptop.png'
import 'animate.css'


export default function Skills() {

  const skillsList = ['Next.js', 'React', 'TypeScript', 'JavaScript', 'CSS - SASS', 'Material UI', 'HTML5', 'Git - Github', 'Postman']; 

  return (
    <section className="skills__section animate__animated animate__fadeInUp" id='skills'>
      <div className="skills__container" id='ind__one'>
       <Image className="skills__img" height= '1080' src={skillsImg} alt='Branding image' />                            

        <div className="skills__text"  >
          <h2 className="skills__title"><span>01 </span>Habilidades</h2>
          <p>Experiencia en desarrollo de sitios y aplicaciones web con tecnologías y herramientas como: <br/></p>
          <ul>            
            {
              skillsList.map(itemList => (
                <li key={itemList} className='skills__list'>{itemList}</li>
              ))
            }
          </ul>
          <div className="decora__text ml-0"></div>
        </div>
      </div>
    </section>
  )
}

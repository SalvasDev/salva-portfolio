import React from 'react'
import FormContact from './formContact'

export default function Contact() {
  return (
    <section className='contact__section animate__animated animate__fadeInUp' id='contact'>      
      <div className="contact__container">
        <div className="contact__header" id='ind__four'>
          <h2 className="contact__title"  ><span>04 </span>Hablemos</h2>
          <p className="contact__tagline">Por favor llena el siguiente formulario si deseas que me ponga en contacto contigo.</p>
        </div>

        {/* Grid contact form */}
        <div className="form__section" >

          <div className="form__inputs" >            
            <FormContact/>
          </div>

          <div className="contact__info">
            <span>443 238 2668</span>
            <span>salsanzmelc@gmail.com</span>
          </div>

        </div>

      </div>
    </section>
  )
}
